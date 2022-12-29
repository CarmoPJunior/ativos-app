ARG APP_NAME=frontend
ARG APP_PATH=/home/node/app/$APP_NAME
ARG NODE_VERSION=16-alpine3.16

FROM node:$NODE_VERSION
ARG APP_NAME
ARG APP_PATH

# Instala o NGINX e o gettext para usar o comando(envsubst)
RUN apk update && \
    apk add --no-cache nginx && \
    apk add --no-cache gettext

# muda para o diretório de trabalho
WORKDIR $APP_PATH

# Copia o arquivo package.json e package-lock.json para a imagem
COPY ./$APP_NAME/package*.json $APP_PATH/

RUN npm cache clean --force
RUN npm install

# Copia os arquivos da pasta local para dentro do container
COPY ./$APP_NAME/ $APP_PATH

# Executa o buil do projeto
# RUN npm run build
RUN npm run build --omit=dev

## Remove os arquivos padrões do website do Nginx
RUN rm -rf /usr/share/nginx/html/*

## Copia a configuração do nginx
COPY ./docker/frontend/nginx.conf  /etc/nginx/nginx.conf

## Copia os arquivos de build do app para pasta do nginx
RUN cp -r $APP_PATH/dist/frontend/ /usr/share/nginx/html

## Remove os arquivos 
RUN rm -rf $APP_PATH/node_modules/

## Executa o nginx e altera as informações do env.js com os valores do environment variables
CMD ["/bin/sh",  "-c",  "envsubst < /usr/share/nginx/html/assets/env.sample.js > /usr/share/nginx/html/assets/env.js && exec nginx -g 'daemon off;'"]
