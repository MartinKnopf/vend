# VEND
> VUE.JS + EXPRESS + NODE + DOCKER

## Build Setup

``` bash
# remove all versions of the docker image and its corresponding containers
sh app.sh clean

# build the docker image
sh app.sh build

# run the docker container with a shell
sh app.sh dev

# run the docker container and execute a command
sh app.sh dev "npm run start"

# run the docker container for production (starts the app server)
sh app.sh prod
```

Using a shell inside the container you can do the following:

``` bash
# start the DEV server with 
gulp dev

# build the backend and frontend manually
gulp build

# run backend unit tests
gulp test-backend

# run frontend unit tests
gulp test-frontend

# run all tests
gulp test
```
