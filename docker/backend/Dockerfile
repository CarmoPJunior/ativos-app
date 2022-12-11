ARG APP_NAME=backend
ARG APP_PATH=/opt/$APP_NAME
ARG PYTHON_VERSION=3.10.2-slim

# pega a imagem do python
FROM python:$PYTHON_VERSION
ARG APP_NAME
ARG APP_PATH

# muda para o diretório de trabalho
WORKDIR $APP_PATH

ENV \
    PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    PYTHONFAULTHANDLER=1

ENV \
    PIP_NO_CACHE_DIR=off \
    PIP_DISABLE_PIP_VERSION_CHECK=on \
    PIP_DEFAULT_TIMEOUT=100

# Copia o arquivo requirements.txt para a imagem
COPY ../$APP_NAME/requirements.txt $APP_PATH/requirements.txt

# Instala as dependÊncias e pacotes do arquivo requirements.txt
# RUN pip install --upgrade setuptools
RUN pip install -r requirements.txt
# RUN pip wheel --no-cache-dir --no-deps --wheel-dir $APP_PATH/wheels -r requirements.txt
# RUN pip install --no-cache $APP_PATH/wheels/*

# Copia todo conteúdo da pasta do projeto para a imagem
COPY ./$APP_NAME/ $APP_PATH

# Copia o arquivo de inicialização 
COPY ./docker/backend/entrypoint.sh $APP_PATH/entrypoint.sh
# Atribui permissão de execução ao arquivo de inicialização
RUN chmod +x $APP_PATH/entrypoint.sh

# Declara as variáveis de ambiente
ENV API_PORT=8080
ENV API_HOST=0.0.0.0
ENV STREAMLIT_SERVER_PORT=8081
ENV UVICORN_RELOAD=False
ENV UVICORN_DEBUG=False

# Executa o arquivo de inicialização da API e do Streamlit
CMD ["./entrypoint.sh"] 