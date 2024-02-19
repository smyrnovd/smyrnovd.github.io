---
title: Mounting NTFS Drives in Linux Using ntfs-3g
description: ""
pubDate: 2023-06-22
author: Dmitry
math: true
draft: false
tags:
  - linux
  - NTFS
  - ntfs-3g
---

In Linux, mounting NTFS drives can be essential for accessing data stored on Windows-formatted partitions. This guide will walk you through the process of installing the necessary tools, creating mount points, and configuring automatic mounts on system boot.

### Step 1: Install fuse and ntfs-3g

The first step is to install the Fuse file system and the ntfs-3g driver. Open your terminal and run:

```bash
sudo dnf install fuse ntfs-3g
```

### Step 2: Identify and Prepare Disks

Use the

```bash
lsblk
```

command to list available disks. Identify the NTFS partitions you want to mount. For this example, let's assume we have two partitions: /dev/sdb2 and /dev/sdc2.

Create mount points for each partition:

I want to mount 2 different disks so I need create 2 folders

```bash
sudo mkdir /mnt/ntfs1
sudo mkdir /mnt/ntfs2
```

### Step 3: Mount NTFS Partitions

Now, mount the NTFS partitions to the created directories:

```bash
sudo mount -t ntfs-3g /dev/sdb2 /mnt/ntfs1/
sudo mount -t ntfs-3g /dev/sdc2 /mnt/ntfs2/
```

### Step 4: Optional - Configure Automatic Mounts

If you want these partitions to be mounted automatically every time you boot your operating system, you can add entries to the `/etc/fstab` file. Open the file with a text editor:

```bash
sudo nano /etc/fstab
```

Add the following lines for each partition:

```bash
/dev/sdb2 /mnt/ntfs1	ntfs-3g		defaults 0 0
/dev/sdc2 /mnt/ntfs2	ntfs-3g		defaults 0 0
```

Save the file and exit the text editor.

### Step 5: Mount Drives on Boot

To apply the changes without rebooting, run the following command:

```bash
sudo mount -a
```

By following these steps, you should now have your NTFS partitions mounted in your Linux system. This enables seamless access to data stored on these drives and ensures the mounts persist across system reboots. Adjust the instructions according to your specific disk configurations and requirements.
