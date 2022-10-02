#!/bin/sh

set -e

if [ $OS = "Windows_NT" ]
then
  start ./src/browser/index.html;
else
  open -a "Google Chrome" ./src/browser/index.html;
fi;