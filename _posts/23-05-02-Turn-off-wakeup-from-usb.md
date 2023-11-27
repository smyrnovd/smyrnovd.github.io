---
layout: post
title: Turn off wakeup from usb device
lead:
---

Modern computers can wake up from sleep mode ("WakeUp") in response to events from peripheral devices. This allows for power saving; for example, when using a computer as a media center, it can be in sleep mode and wake up upon a signal from the remote control. However, in some cases, this feature can be inconvenient. For instance, a laptop waking up in a bag due to a signal from a wireless mouse, where the button was accidentally pressed, might end up discharged at the most inconvenient moment.

Fortunately, in Linux, it is possible to enable and disable wake-up for individual devices. Unfortunately, this can only be done by setting flags in special files in the depths of SysFS. There is no graphical interface for this purpose.

Specifically, enabling and disabling wake-up for a device is done by writing the string "enabled" or "disabled" to the "wakeup" file located in the "power" subdirectory of the device directory in the depths of SysFS (usually mounted as "/sys"). The remaining task is to identify the device directory. The easiest way to do this is to run the command with the device disconnected:

```bash
sudo udevadm monitor --kernel | grep '/devices/' -m 1
```

And after that, immediately connect the device. As a result, we will get approximately such an output:

```bash
KERNEL[885240.361166] add      /devices/pci0000:00/0000:00:14.0/usb1/1-1 (usb)
```

Here `"/devices/pci0000:00/0000:00:14.0/usb1/1-1"` is the desired path. Accordingly, you can enable wake-up for this device with the following command:

```bash
echo enabled > /sys//devices/pci0000:00/0000:00:14.0/usb1/1-1/power/wakeup
```

And disable it with the following command:

```bash
echo disabled > /sys//devices/pci0000:00/0000:00:14.0/usb1/1-1/power/wakeup
```

In general, nothing overly complicated, but setting the mode (if the default mode is not satisfactory) needs to be done after each device connection. Additionally, a USB device may have a different path if it is connected to another port and/or through a USB hub. Fortunately, there is a solution here as well.

To begin, to move away from abstraction and consider a live example, let's specify the task: we need to disable wake-up for the Microsoft Sculpt Mobile Mouse.

First of all, you need to find out the VendorID/ProductID of your USB device. To do this, execute the following command:

```bash
lsusb
```

As a result, you will get output similar to the following:

```bash
Bus 002 Device 001: ID 1d6b:0003 Linux Foundation 3.0 root hub
Bus 001 Device 004: ID 138a:00ab Validity Sensors, Inc.
Bus 001 Device 003: ID 04f2:b669 Chicony Electronics Co., Ltd HP HD Camera
Bus 001 Device 034: ID 8087:0aaa Intel Corp.
Bus 001 Device 046: ID 045e:07b2 Microsoft Corp. 2.4GHz Transceiver v8.0 used by mouse Wireless Desktop 900
Bus 001 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
```

Find your device. In this case, it has been identified as `"Bus 001 Device 046: ID 045e:07b2 Microsoft Corp. 2.4GHz Transceiver v8.0 used by mouse Wireless Desktop 900"`. ЗHere, the VendorID is `"045e"`, and the ProductID is `"07b2"`. With this information, you can create rules for the udev service, which is responsible for the initial setup of devices in Linux.

Udev rules are stored in several locations. For user rules, the preferred directory is `"/etc/udev/rules.d"`. Create a file named `"99-wakeup.rules"` in this directory with the following contents:

```bash
SUBSYSTEM=="usb", \
        ENV{DEVTYPE}=="usb_device", \
        ATTR{idVendor}=="045e", \
        ATTR{idProduct}=="07b2", \
        RUN+="/bin/sh -c 'echo disabled > /sys$devpath/power/wakeup'"
```

Here, a rule is described that, in response to any event from the USB device `045e:07b2`, executes a command to disable wake-up for this device. The rule will take effect after a system reboot. To make the rule take effect before a reboot, you need to "ask" udev to reread the rules. This is done with the command:

```bash
udevadm control --reload
```

After this, simply reconnect the device, and everything should work. If something is not working, double-check everything carefully. If the error is not immediately apparent, you can enable udev debugging mode and carefully examine the logs. Debugging mode is activated with the command:

```bash
udevadm control --log-priority=debug
```

You can view the logs with the command:

```bash
journalctl -f
```

You can disable debugging mode with the command:

```bash
udevadm control --log-priority=info
```

That's it. Happy working!
