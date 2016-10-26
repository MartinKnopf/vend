#!/bin/sh 

 sudo  apt-get install virtualbox-guest-additions-iso
 sudo apt-get install -y dkms build-essential linux-headers-generic linux-headers-$(uname -r)
 sudo /mnt/VBoxLinuxAdditions.run

# add to /etc/rc.local 'mount -t vboxsf dev /home/m/host_dev'