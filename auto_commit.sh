#!/bin/bash

cd /data/data/com.termux/files/home/javascript

git add .
git commit -m "Auto commit update $(date '+%Y-%m-%d %H:%M:%S')"
git push origin master

termux-toast "Git Auto Commit sukses! $(date '+%H:%M:%S')" -b
