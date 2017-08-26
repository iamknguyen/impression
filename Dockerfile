FROM node:6.5.0
RUN mkdir /src

RUN npm install nodemon -g

WORKDIR /src
ADD app/package.json /src/package.json
RUN npm install
ADD app/nodemon.json /src/nodemon.json
RUN ls -a
COPY app /src
RUN ls -a
EXPOSE 3000

CMD npm start