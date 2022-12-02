# Projeto Ativos APP

## 🎯 Objetivo <a name="objetivo"></a>

>

---

## Table of Contents

1. [Objetivo](#objetivo)
2. [Configuração Ambiente](#configuracao-ambiente)
3. [Rodar o Projeto](#rodar-projeto)
4. [Urls API](#urls-api)

---

## 🛠 Configuração Ambiente <a name="configuracao-ambiente"></a>

### Criar ambiente virtual

> python -m venv venv 

### Ativar ambiente virtual

> source .venv/bin/activate
ou
> .\venv\Scripts\activate  

### Libs instaladas
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


### run console

> python -m src

### run api

> uvicorn src.api:api --reload
ou
> python run_api.py

### run streamlit

> streamlit run src/streamlit.py

---

## ⚡ Urls API <a name="urls-api"></a>

### Root
> http://127.0.0.1:8000

### Docs
> http://127.0.0.1:8000/docs

### Dividendos por ano
> http://127.0.0.1:8000/dividendos/ano/








