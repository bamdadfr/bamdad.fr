#!/bin/bash
# Author: Bamdad Sabbagh <hello@bamdadsabbagh.com>

# is my docker image up to date ?
# !!! this script assumes you are already logged in to your registries

# inputs
# $1 is base image
# $2 is your docker image

# example:
# ./check.sh nginx:alpine registry.domain.com/path/to/image:latest

# if image up to date, returns 0
# if image needs update, returns 1

# variables
IS_UP_TO_DATE=true # assuming that we don't need to update (digests are equal)
SLEEP=2 # set sleeping time for docker pulls and prunes
BASE_IMAGE=$1
IMAGE=$2
STATUS=$?

# pulling latest images
docker pull $BASE_IMAGE > /dev/null && sleep $SLEEP
docker pull $IMAGE > /dev/null && sleep $SLEEP

# inspecting image layers
IMAGE_LAYERS=`docker inspect $IMAGE | jq -r .[].RootFS.Layers`
BASE_IMAGE_LAYERS=`docker inspect $BASE_IMAGE | jq -r .[].RootFS.Layers`
BASE_IMAGE_LAYERS_LENGTH=`docker inspect $BASE_IMAGE | jq -r '.[].RootFS.Layers | length'`

# comparing layers one by one (from oldest to newest)
for (( j=0; j<$BASE_IMAGE_LAYERS_LENGTH; j++ )); do
    if [ "$IS_UP_TO_DATE" = false ]; then
        break
    fi

    BASE_IMAGE_LAYER=`echo $BASE_IMAGE_LAYERS | jq -r .[$j]`
    IMAGE_LAYER=`echo $IMAGE_LAYERS | jq -r .[$j]`

    if [ "$BASE_IMAGE_LAYER" != "$IMAGE_LAYER" ]; then
        IS_UP_TO_DATE=false
    fi
done

function return_result () {
    if [ "$IS_UP_TO_DATE" = true ]; then
        return 0
    else
        return 1
    fi
}

return_result