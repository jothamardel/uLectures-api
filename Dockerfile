FROM node:10.23.3

WORKDIR /usr/src/ulectures-api

COPY ./ ./

RUN npm install

CMD ["/bin/bash"]