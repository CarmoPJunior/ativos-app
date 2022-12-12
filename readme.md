# Projeto Ativos APP

## 🎯 Objetivo <a name="objetivo"></a>

>

---

## Sumário

1. [Objetivo](#objetivo)
2. [Configuração Ambiente](#configuracao-ambiente)
3. [Rodar o Projeto](#rodar-projeto)
4. [Rodar o Projeto com o Docker](#rodar-projeto-docker)
4. [Urls](#urls)

---

## 🛠 Configuração do Ambiente <a name="configuracao-ambiente"></a>

### Criar ambiente virtual

> python -m venv venv

### Ativar ambiente virtual

> source .venv/bin/activate
ou
> .\venv\Scripts\activate  

### Libs instaladas
>
> - pip install beautifulsoup4
> - pip install python-dotenv
> - pip install pandas
> - pip install matplotlib
> - pip install openpyxl
> - pip install fastapi
> - pip install uvicorn
> - pip install streamlit-aggrid
> - pip install streamlit

### Instalar as libs do projeto

> pip install -r requirements.txt

### Gerar o arquivo requeriments do projeto

> pip freeze > requirements.txt

### listar as libs do projeto

> pip list

---

## ⚙️ Rodar o Projeto <a name="rodar-projeto"></a>

### Mover para pasta do projeto

> cd backend

### run console

> python -m src

### run api

> python run_api.py

ou

> uvicorn src.api:api --reload

### run streamlit

> streamlit run src/streamlit.py

---

## ⚙️ Rodar o Projeto com o Docker <a name="rodar-projeto-docker"></a>

<!-- > cd docker -->

> docker-compose up -d

---

## ⚡ Urls <a name="urls"></a>

### Api Root

> <http://127.0.0.1:8080>

### Api Docs

> <http://127.0.0.1:8080/docs>

### Stremlit

> <http://127.0.0.1:8080/docs>

### API Recursos

#### Dividendos por ano

> <http://127.0.0.1:8080/dividendos/ano/>


<!-- Comandos Úteis -->
<!-- docker builder prune -f  -->
<!-- docker system df  -->