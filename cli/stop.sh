#!/bin/bash

set -e

cd "$(dirname "$0")/.."
docker compose down
docker system prune -af