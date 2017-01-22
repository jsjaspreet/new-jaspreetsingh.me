#!/bin/bash

echo "Running post-build"

if ! diff -q yarn.lock.dual /tmp/yarn.lock > /dev/null  2>&1; then
  echo "Saving new Yarn cache"
  docker run --rm --entrypoint tar jsme:latest czf - /usr/local/share/.cache/yarn/ > .yarn-cache.tgz
  echo "Saving new yarn.locks"
  cp /tmp/yarn.lock yarn.lock
  cp /tmp/yarn.lock yarn.lock.dual
fi
