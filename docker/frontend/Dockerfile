ARG APP_NAME=frontend
ARG APP_PATH=/opt/$APP_NAME
ARG NODE_VERSION=16-alpine3.16

FROM node:$NODE_VERSION AS build
ARG APP_NAME
ARG APP_PATH

# muda para o diretório de trabalho
WORKDIR $APP_PATH

# Copia o arquivo package.json para a imagem
COPY ./$APP_NAME/package.json ./$APP_NAME/package-lock.json $APP_PATH/

RUN npm install

COPY ./$APP_NAME/ $APP_PATH
RUN npm run build

### STAGE 2: Run ###
FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/aston-villa-app /usr/share/nginx/html