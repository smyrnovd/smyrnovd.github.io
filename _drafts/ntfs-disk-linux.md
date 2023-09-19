```bash
sudo apt install fuse ntfs-3g
```

```bash
lsblk
```

```bash
sudo mkdir /mnt/ntfs1 
sudo mkdir /mnt/ntfs2
```

```bash	
sudo mount -t ntfs-3g /dev/sdb2 /mnt/ntfs1/
sudo mount -t ntfs-3g /dev/sdc2 /mnt/ntfs2/
```
If you need mount your disks every time when you boot os, then make this.

```bash
/dev/sdb2 /mnt/ntfs1	ntfs-3g		defaults 0 0
/dev/sdc2 /mnt/ntfs2	ntfs-3g		defaults 0 0
```

Then mount disks with command

```bash
sudo mount -a
```