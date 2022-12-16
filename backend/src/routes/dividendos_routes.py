from fastapi import APIRouter, Query
from typing import List

from src.dto.dividendos_dto import DividendosOut
from src.service.dividendos_service import (obtemDividendosPorAno)

dividendos_routes = APIRouter(prefix="/dividendos")


@dividendos_routes.get("/ano/", response_model=List[DividendosOut])
async def listaDividendosPorAno(anos: list[int] | None = Query(default=[])):
    """Lista os dividendos recebidos com os ativos por ano"""

    # Convert Pandas DataFrame To dict
    df_dividendos_por_ano = obtemDividendosPorAno(anos).to_dict('records')

    dividendos = [
        DividendosOut(**dividendo) for dividendo in df_dividendos_por_ano
    ]

    return dividendos
