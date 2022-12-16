from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
load_dotenv()

from src.config.api_config import ApiConfig
from src.routes.dividendos_routes import dividendos_routes
from src.routes.ativos_routes import ativos_routes
from src.routes.vendas_routes import vendas_routes

ROOT_PATH = ApiConfig.ROOT_PATH.value

api = FastAPI(
    title=ApiConfig.TITLE.value,
    description=ApiConfig.DESCRIPTION.value,
    version=ApiConfig.VERSION.value,
    terms_of_service=ApiConfig.TERMS_OF_SERVICE.value,
    contact=ApiConfig.CONTACT.value,
    license_info=ApiConfig.LICENSE_INFO.value,
    openapi_tags=ApiConfig.TAGS_METADATA.value,
    docs_url=ApiConfig.URL_DOCS_API.value,
    redoc_url=None,
    # root_path=ROOT_PATH,
)

api.add_middleware(
    CORSMiddleware,
    allow_origins=ApiConfig.CORS_ALLOW_ORIGINS.value,
    allow_credentials=True,
    allow_methods=ApiConfig.CORS_ALLOW_METHODS.value,
    allow_headers=ApiConfig.CORS_ALLOW_ORIGINS.value,
)


@api.get(ROOT_PATH, tags=["Root"])
def root():
    """Api Ativos"""
    return {
        "Status": "Ok",
        "Descrição": "Api Ativos"
    }


api.include_router(dividendos_routes, tags=["Ativos Dividendos"], prefix=ROOT_PATH)
api.include_router(vendas_routes, tags=["Ativos Lucro Vendas"], prefix=ROOT_PATH)
api.include_router(ativos_routes, tags=["Ativos Lucro Geral"], prefix=ROOT_PATH)
