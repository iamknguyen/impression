FROM node:6.5.0
RUN mkdir -p /src/app
RUN npm install nodemon -g
WORKDIR /src/app
ADD app/package.json /src/app/package.json
RUN npm install --quiet
ADD app/nodemon.json /src/app/nodemon.json
EXPOSE 3000
CMD npm start