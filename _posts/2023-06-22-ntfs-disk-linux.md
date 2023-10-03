---
layout: post
title: NTFS Linux guide
lead: 
---

First of all we need to install ```fuse``` and ```ntfs-3g```
```bash
sudo apt install fuse ntfs-3g
```
Than lets see our disks
```bash
lsblk
```

I want to mount 2 different disks so I need create 2 folders
```bash
sudo mkdir /mnt/ntfs1 
sudo mkdir /mnt/ntfs2
```
Ok lets mount it in our system
```bash	
sudo mount -t ntfs-3g /dev/sdb2 /mnt/ntfs1/
sudo mount -t ntfs-3g /dev/sdc2 /mnt/ntfs2/
```
If you need mount your disks every time when you boot os, then add this two lines in file ```/etc/fstab```.

```bash
/dev/sdb2 /mnt/ntfs1	ntfs-3g		defaults 0 0
/dev/sdc2 /mnt/ntfs2	ntfs-3g		defaults 0 0
```

Then mount disks with command

```bash
sudo mount -a
```