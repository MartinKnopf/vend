FROM ubuntu:16.04

MAINTAINER Martin Knopf <m@flatbutton.co>

WORKDIR /app

COPY . /app

RUN apt-get update && apt-get install -y git nodejs nodejs-legacy npm ruby ruby-dev

RUN gem install sass

RUN npm install

RUN sass public/stylesheets/style.sass:public/stylesheets/style.css
