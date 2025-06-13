#!/usr/bin/env bash
set -e

CONTAINER_RUNNER="${CONTAINER_RUNNER:-podman}"
PLAYWRIGHT_VERSION=$(scripts/get-playwright-version.sh)

$CONTAINER_RUNNER run --rm -v "$(pwd)":/work/ -v /work/node_modules -w /work/ -it -e CI mcr.microsoft.com/playwright:"${PLAYWRIGHT_VERSION}-jammy" "$@"
