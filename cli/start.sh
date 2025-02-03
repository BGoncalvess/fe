#!/bin/bash

set -e

usage() {
    echo "Usage: $0 [-d] [-l <mfe-name1> <mfe-name2> ...] [-r <mfe-name1> <mfe-name2> ...]"
    echo "Options:"
    echo "  -d                               Run using Docker (default if -d is present)"
    echo "  -l <mfe-name1> <mfe-name2> ...   Build and run specified microfrontends (space-separated)"
    echo "  -r <mfe-name1> <mfe-name2> ...   Redeploy specified microfrontends live (space-separated)"
    exit 1
}

USE_DOCKER=false
SERVICES=""
REDEPLOY=false

while getopts "dl:r:" opt; do
    case ${opt} in
    d) USE_DOCKER=true ;;
    l) SERVICES+=("${OPTARG}") ;;
    r)
        REDEPLOY=true
        SERVICES+=("${OPTARG}")
        ;;
    *) usage ;;
    esac
done

cd "$(dirname "$0")/.."

if [ -f ".env" ]; then
    set -o allexport
    source "./.env"
    set +o allexport
fi

if [ ${#SERVICES[@]} -eq 0 ]; then
    mapfile -t SERVICES < <(find . -maxdepth 1 -type d -name "mfe.*" -printf "%f\n")
fi

if $USE_DOCKER; then
    docker compose build ${SERVICES[@]:+"${SERVICES[@]}"}
    docker compose up -d --no-build ${SERVICES[@]:+"${SERVICES[@]}"}
else
    for service in ${SERVICES[@]:-mfe-*}; do
        if [ -d "$service" ]; then
            if $REDEPLOY; then
                pkill -f "npm run dev" || true
            fi
            (cd "$service" && npm run dev &)
        fi
    done
fi
