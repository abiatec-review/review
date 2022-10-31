#!/bin/bash

watchman watch-del-all
rm -rf $TMPDIR/metro-cache
npm cache clean --force

rm -rf node_modules
yarn

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )/.." && pwd )"

cd ios || exit

rm -rf Podfile.lock
pod deintegrate
pod cache clean --all
pod repo remove trunk
pod setup
arch -x86_64 pod install --repo-update
