FROM nikolaik/python-nodejs:python3.7-nodejs10

ENV WORKDIR /var/www
WORKDIR $WORKDIR

COPY . .

RUN npm install
RUN npm install -g gulp
RUN npm i node-sass