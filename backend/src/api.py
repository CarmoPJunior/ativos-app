from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware

from src.config.api_docs_config import ApiConfig
from src.routes.dividendos_routes import dividendos_routes
from src.routes.ativos_routes import ativos_routes
from src.routes.vendas_routes import vendas_routes

origins = [
    "http://localhost",
    "http://localhost:4200",
]

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
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@api.get(ROOT_PATH, tags=["Root"])
def root():
    """Api Ativos"""
    return {"Description": "Api Ativos"}


api.include_router(dividendos_routes, tags=["Ativos Dividendos"], prefix=ROOT_PATH)
api.include_router(vendas_routes, tags=["Ativos Lucro Vendas"], prefix=ROOT_PATH)
api.include_router(ativos_routes, tags=["Ativos Lucro Geral"], prefix=ROOT_PATH)

# @api.get("/items/")
# async def read_items(q: list[str] | None = Query(default=["foo", "bar"])):
#     query_items = {"q": q}
#     for item in q:
#         print(item)

#     return query_items
