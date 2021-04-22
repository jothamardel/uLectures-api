FROM  node:14.16.0

WORKDIR /usr/src/ulectures-api

COPY ./ ./

EXPOSE 5000

RUN npm install

CMD ["npm", "start"]