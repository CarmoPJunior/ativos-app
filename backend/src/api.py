from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from src.routes.dividendos_routes import dividendos_routes
from src.routes.ativos_routes import ativos_routes
from src.routes.vendas_routes import vendas_routes

origins = [
    "http://localhost",
    "http://localhost:4200",
]

api = FastAPI(title="Ativos")

api.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@api.get("/")
def root():
    """Api Ativos"""
    return {"Description": "Api Ativos"}


api.include_router(dividendos_routes)
api.include_router(vendas_routes)
api.include_router(ativos_routes)
