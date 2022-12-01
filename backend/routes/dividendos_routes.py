from fastapi import APIRouter, Request as RequestFastApi
from typing import List, Optional

from backend.dto.dividendos_dto import DividendosOut
from backend.service.dividendos_service import (agrupaDividendosPorMes,
                                                obtemDividendosPorAno)

dividendos_routes = APIRouter()


@dividendos_routes.get("/dividendos/mes", response_model=List[DividendosOut])
async def listaDividendosPorMes(ano: Optional[int] = None):
    """Lista os dividendos recebidos por mês"""
    # Convert Pandas DataFrame To JSON Using orient = 'records' 
    df_dividendos_por_mes = agrupaDividendosPorMes().to_dict('records')   
    
    dividendos = [
        DividendosOut(**dividendo) for dividendo in df_dividendos_por_mes
    ]

    return dividendos

@dividendos_routes.get("/dividendos/ano/", response_model=List[DividendosOut])
async def listaDividendosPorAno(ano: Optional[int] = None):
    # items: List[int] = Query(None, alias="items[]")
    """Lista os dividendos recebidos com os ativos por ano"""

    anos = [] 
    if ano :
        anos.append(ano)
    # Convert Pandas DataFrame To dict
    df_dividendos_por_ano = obtemDividendosPorAno(anos).to_dict('records')   
    
    dividendos = [
        DividendosOut(**dividendo) for dividendo in df_dividendos_por_ano
    ]

    return dividendos