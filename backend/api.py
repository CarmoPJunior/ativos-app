from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware

from backend.routes.dividendos_routes import dividendos_routes
from backend.routes.ativos_routes import ativos_routes
from backend.routes.vendas_routes import vendas_routes

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


# return Response(
#     df_dividendos_por_mes.to_json(orient="records"),
#     media_type="application/json")
