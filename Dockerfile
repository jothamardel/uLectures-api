FROM  node:14.16.0

WORKDIR /usr/src/ulectures-api

COPY ./ ./

RUN npm install

CMD ["/bin/bash"]