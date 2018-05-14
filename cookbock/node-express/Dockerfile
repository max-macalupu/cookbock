FROM node:8
MAINTAINER Max Macalupu "maxleoj@gmail.com"
WORKDIR /apps
COPY . /apps
RUN npm install
RUN npm install mongodb
CMD /bin/bash -c "sleep 5;" && node index.js
EXPOSE 8081
