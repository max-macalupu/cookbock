FROM node:8
MAINTAINER Max Macalupu "maxleoj@gmail.com"
WORKDIR /app
COPY package.json /app
RUN npm install 
RUN npm install mongodb
COPY . /app
CMD /bin/bash -c "sleep 5;" && node index.js
EXPOSE 8081
