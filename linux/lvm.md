
how extend file system to added physical disk:
```
# lsblk -f
# pvcreate /dev/sdb
# vgextend ubuntu-vg /dev/sdb
# lvm lvextend -l +100%FREE /dev/ubuntu-vg/ubuntu-lv
# resize2fs -p /dev/ubuntu-vg/ubuntu-lv
```
