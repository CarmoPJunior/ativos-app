from fastapi import APIRouter, Request as RequestFastApi
from typing import List, Optional

from src.dto.venda_lucro_dto import VendaLucroOut
from src.service.vendas_service import (obtemLucroVendasPorAno)

vendas_routes = APIRouter(prefix="/vendas")

@vendas_routes.get("/lucro/ano/", response_model=List[VendaLucroOut])
async def listaLucroVendasPorAno(ano: Optional[int] = None):
    """Lista o lucro obtido com as vendas dos ativos por ano"""

    anos = []
    if ano:
        anos.append(ano)
    # Convert Pandas DataFrame To dict
    df_lucro_vendas_por_ano = obtemLucroVendasPorAno(anos).to_dict('records')

    lucroVenda = [
        VendaLucroOut(**venda) for venda in df_lucro_vendas_por_ano
    ]

    return lucroVenda
