#!/bin/sh

usage(){
  echo "Usage: sh $0 COMMAND [ARG]"
  echo ""
  echo "Commands:"
  echo "    clean     removes all docker images and containers of this app"
  echo "    build     builds the docker image"
  echo "    dev       starts the docker container and runs the given ARG"
  exit 1
}

if [ $# -eq 0 ]; then
    usage
fi

if [ $1 = "clean" ]; then
    docker ps -a | awk '{ print $1,$2 }' | grep app: | awk '{print $1 }' | xargs -I {} docker rm {}
    docker rmi -f app
elif [ $1 = "build" ]; then
    docker build -t app .
elif [ $1 = "dev" ]; then
    if [ $# -gt 1 ]; then
        echo 'starting container...'
        docker run -it -p 3000:3000 -v `pwd`:/app -v /app/node_modules -v /app/public/node_modules app:latest $2
    else
        echo 'starting container...'
        docker run -it -p 3000:3000 -v `pwd`:/app -v /app/node_modules -v /app/public/node_modules app:latest /bin/bash
    fi
elif [ $1 = "prod" ]; then
    echo 'starting container...'
    docker run -d -p 3000:3000 app:latest npm run start
else
    usage
fi
