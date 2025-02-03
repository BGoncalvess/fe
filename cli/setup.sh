#!/bin/bash

set -e

cd "$(dirname "$0")/.."

for dir in mfe.*; do
  if [ -d "$dir" ]; then
    cd "$dir"
    npm install
    cd ..
  fi
done
