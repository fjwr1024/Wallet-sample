#!/bin/bash
set -eux

SCRIPT_DIR=$(
    cd $(dirname $0)
    pwd
)

ROOT_DIR="$SCRIPT_DIR/../"
cd $ROOT_DIR

if [ -d ".next" ]; then
    rm -r .next
else
    echo "no next directory"
fi
