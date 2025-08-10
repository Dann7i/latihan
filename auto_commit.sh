#!/bin/bash

cd /data/data/com.termux/files/home/javascript

git add .
git commit -m "Auto commit update $(date '+%Y-%m-%d %H:%M:%S')"
git push origin master

# Kirim notifikasi kalau selesai
termux-notification --title "Git Auto Commit" --content "Commit & Push berhasil pada $(date '+%Y-%m-%d %H:%M:%S')" --priority high
