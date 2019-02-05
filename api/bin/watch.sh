#!/usr/bin/env sh

set -ex

pm2 start run.js --watch . && pm2 logs