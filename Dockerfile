FROM mhart/alpine-node

USER root

RUN mkdir /app
WORKDIR /app
COPY . /app

RUN npm install

CMD ["sh", "-c", "npm rebuild node-sass; npm start;"]
