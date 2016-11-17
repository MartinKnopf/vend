#!/bin/sh 

 sudo  apt-get install virtualbox-guest-additions-iso
 sudo apt-get install -y dkms build-essential linux-headers-generic linux-headers-$(uname -r)
 sudo mount /dev/cdrom /mnt
 sudo /mnt/VBoxLinuxAdditions.run
 sudo mkdir /home/m/host

# add this also to /etc/rc.local
mount -t vboxsf dev /home/m/host

# install docker
sudo apt-get update
sudo apt-key adv --keyserver hkp://p80.pool.sks-keyservers.net:80 --recv-keys 58118E89F3A912897C070ADBF76221572C52609D
sudo apt-add-repository 'deb https://apt.dockerproject.org/repo ubuntu-xenial main'
sudo apt-get update
apt-cache policy docker-engine
sudo apt-get install -y docker-engine
sudo systemctl status docker