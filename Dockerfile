FROM node:16-alpine3.14
WORKDIR /app
EXPOSE 3000
RUN npm i -g @nestjs/cli
COPY build/start-dev.sh /tmp
RUN chmod 777 /tmp/start-dev.sh
ENTRYPOINT [ "/tmp/start-dev.sh" ]
