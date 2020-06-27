#!/bin/bash

if ./check.sh nginx:alpine docker.pkg.github.com/bamdadsabbagh/bamdadsabbagh-www/bamdadsabbagh-www:latest; then
    echo "images are up to date"
else
    echo "image needs an update"
fi