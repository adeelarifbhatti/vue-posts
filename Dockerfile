FROM node:19

MAINTAINER adeelarifbhatti@gmail.com


WORKDIR /usr/src/app
COPY package.json .
COPY start.sh .
RUN npm install
RUN npm install -g json-server
RUN npm update
RUN chmod +x /usr/src/app/start.sh
ENTRYPOINT ["/usr/src/app/start.sh"]
