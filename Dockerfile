FROM node:7
RUN mkdir /src
RUN npm install nodemon -g
WORKDIR /src
ADD app/package.json /src/package.json
RUN npm install
ADD app/nodemon.json /src/nodemon.json
EXPOSE 8081
CMD npm start