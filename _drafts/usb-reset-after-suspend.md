### Instructions for resetting the atkbd driver and USB mouse on resume from suspend
This procedure worked for me:

Put the following script somewhere sensible. 
I put it at `/usr/local/bin/reset-input-devices.sh`


```bash
#! /bin/sh
# Reset the keyboard driver and USB mouse 
        
modprobe -r atkbd
modprobe atkbd reset=1
echo "Finished resetting the keyboard."
        
# Reset every USB device, because we don't know in advance which port
# the mouse is plugged into. Send errors to /dev/null to avoid 
# cluttering up the logs.
for USB in /sys/bus/usb/devices/*/authorized; do
    eval "echo 0 > $USB" 2>/dev/null 
    eval "echo 1 > $USB" 2>/dev/null
done
echo "Finished resetting USB inputs."
```

Since it has to be run as root, you should be careful with permissions, i.e.:

```bash
$ sudo chown root:root reset-input-devices.sh
$ sudo chmod 744 reset-input-devices.sh
```

To make this script run after resuming from suspend, we can use a systemd service. 
Let's say that the script above is at /usr/local/bin/reset-input-devices.sh. 
Now we need to create a service file in the /etc/systemd/system/ directory -- let's call it `/etc/systemd/system/reset-input-devices-after-sleep.service` 
It should look like this:

```bash
# This service is used to work around an apparent bug that freezes 
# keyboard and mouse inputs after waking from sleep.
            
[Unit]
Description=Reset the keyboard and mouse after waking from sleep
After=suspend.target hibernate.target hybrid-sleep.target suspend-then-hibernate.target
            
[Service]
ExecStart=/usr/local/bin/reset-input-devices.sh
CPUWeight=500
           
[Install]
WantedBy=suspend.target hibernate.target hybrid-sleep.target suspend-then-hibernate.target
```

Then enable the service so that it is ready to respond to a return-from-suspend event both now and after every new boot:

```bash
$ systemctl enable --now reset-input-devices-after-sleep.service
```
