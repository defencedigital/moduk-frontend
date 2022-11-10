#!/usr/bin/env bash
set -e

PLAYWRIGHT_VERSION=$(jq -r '.devDependencies."@playwright/test"' ./package.json)

echo v"${PLAYWRIGHT_VERSION#^}"
