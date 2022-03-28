#!/bin/bash
npm rum build
git add .

read message
echo "Mensagem do commit:"
git commit -am "$message"
git push
ssh 35.247.223.255 \
  'git -C /home/SyLu4N/api ' \
  'pull origin master && ' \
  'pm2 restart api && sudo systemctl restart nginx'
