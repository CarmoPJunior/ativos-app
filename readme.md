# Projeto Ativos APP

## 🎯 Objetivo <a name="objetivo"></a>

>

---

## Sumário

1. [Objetivo](#objetivo)
2. [Configuração do Ambiente](#configuracao-ambiente)
3. [Executar o Projeto](#Executar-projeto)
    1. [Executar o Backend](#executar-backend)
    2. [Executar o Frontend](#executar-frontend)
4. [Executar o Projeto com o Docker](#Executar-projeto-docker)
4. [Urls](#urls)

---

## 🛠 Configuração do Ambiente <a name="configuracao-ambiente"></a>

### Configuração do backend <a name="configuracao-backend"></a>

#### Criar arquivo <b>.env</b> com os enviroments abaixo

> API_PORT = 8080 <br>
> API_HOST = localhost <br>
> STREAMLIT_SERVER_PORT = 8181 <br>
> UVICORN_RELOAD = True <br>
> UVICORN_DEBUG = False <br>
> PLANILHA_ATIVOS = ./data/contas.xlsx <br>

#### Criar o ambiente virtual

> python -m venv venv

#### Ativar o ambiente virtual

- No Python
    > source .venv/bin/activate

- No Windows
    > .\venv\Scripts\activate  

#### Instalar as libs do projeto

> pip install -r requirements.txt

---

## ⚙️ Executar o Projeto <a name="Executar-projeto"></a>

---

### Executar o Backend <a name="executar-backend"></a>

#### Mover para pasta do projeto backend

> cd backend

#### Executar o comando abaixo para usar o console

> python -m src

#### Executar o comando abaixo para usar a api

> python Executar_api.py

ou

> uvicorn src.api:api --reload

#### Executar o comando abaixo para usar o streamlit

> streamlit Executar src/streamlit.py

---

### Executar o Frontend <a name="executar-frontend"></a>

#### Mover para pasta do projeto frontend

> cd frontend

#### Executar o comando

> npm run start

---

## ⚙️ Executar o Projeto com o Docker <a name="Executar-projeto-docker"></a>

#### Executar o comando

> docker-compose up -d

---

## ⚡ Urls <a name="urls"></a>

### Api Root

> <http://localhost:8080>

### Api Docs

> <http://localhost:8080/docs>

### Stremlit

> <http://localhost:8181>

### API Recursos

- #### Dividendos por ano

    > <http://localhost:8080/dividendos/ano/>

- #### Lucro vendas por ano

    > <http://localhost:8080/vendas/lucro/ano/>

- #### lucroativos por ano

    > <http://localhost:8080/ativos/lucro/ano/>

<br />

---

## Informações Sobre o projeto

---

### Backend

### Libs instaladas no Backend

> - pip install beautifulsoup4
> - pip install python-dotenv
> - pip install pandas
> - pip install matplotlib
> - pip install openpyxl
> - pip install fastapi
> - pip install uvicorn
> - pip install streamlit-aggrid
> - pip install streamlit

### Gerar o arquivo requeriments do projeto Backend

> pip freeze > requirements.txt

### Listar as libs do projeto Backend

> pip list

---

### Frontend

### Libs instaladas no Frontend

<!-- ### Comandos Docker

> docker builder prune -f 
> docker system df  -->
