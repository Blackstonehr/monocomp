#!/bin/bash
set -e

echo "Setting up Blackstone Monorepo..."

npm install

for dir in ./apps/* ./packages/*; do
  if [ -f "$dir/package.json" ]; then
    (cd "$dir" && npm install)
  fi
done

echo "Run the following to start dev servers for each app:"
for dir in ./apps/*; do
  if [ -f "$dir/package.json" ]; then
    echo "cd $dir && npm run dev"
  fi
done