#!/bin/bash
pm2 describe strapi > /dev/null
RUNNING=$?

if [ "${RUNNING}" -ne 0 ]; then
  pm2 start ecosystem.config.js --env production
else
  pm2 restart ecosystem.config.js --env production
fi;
