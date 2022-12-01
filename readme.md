
## Criar ambiente virtual
> python -m venv venv 

## Ativar ambiente virtual
> source .venv/bin/activate
ou
> .\venv\Scripts\activate  

## Libs instaladas
> pip install beautifulsoup4
> pip install python-dotenv
> pip install pandas
> pip install matplotlib
> pip install openpyxl
> pip install fastapi
> pip install uvicorn
> pip install streamlit-aggrid
> pip install streamlit

## listar as libs do projeto
> pip list

## Instalar as libs do projeto
> pip install -r requirements.txt

## Gerar o arquivo requeriments do projeto
> pip freeze > requirements.txt


## run console
> python -m backend

## run api
> uvicorn backend.api:api --reload
ou
> python backend/run_api.py

## run streamlit
> streamlit run backend/streamlit.py

---

# Urls

## Root
> http://127.0.0.1:8000

## Docs
> http://127.0.0.1:8000/docs

### Dividendos por ano
> http://127.0.0.1:8000/dividendos/ano/








