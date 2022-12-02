ARG APP_NAME=backend
ARG APP_PATH=/opt/$APP_NAME
ARG PYTHON_VERSION=3.10.2-slim

# pega a imagem do python
FROM python:$PYTHON_VERSION
ARG APP_NAME
ARG APP_PATH
# muda para o diretório de trabalho
WORKDIR $APP_PATH

# copy the requirements file into the image
COPY ./$APP_NAME/requirements.txt $APP_PATH/requirements.txt

# install the dependencies and packages in the requirements file
# RUN pip install --upgrade setuptools
RUN pip install -r requirements.txt

# copy every content from the local file to the image
COPY ./$APP_NAME/ $APP_PATH

ENV \
    PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    PYTHONFAULTHANDLER=1

ENV \
    PIP_NO_CACHE_DIR=off \
    PIP_DISABLE_PIP_VERSION_CHECK=on \
    PIP_DEFAULT_TIMEOUT=100

# Declara as variaveis de ambiente
ENV API_PORT=8080
ENV API_HOST=0.0.0.0
ENV STREAMLIT_PORT=8081
ENV UVICORN_RELOAD=False
ENV UVICORN_DEBUG=False

# EXPOSE 8081
# configure the container to run in an executed manner
ENTRYPOINT [ "python" ]

CMD ["run_api.py", "streamlit run src/streamlit.py" ]