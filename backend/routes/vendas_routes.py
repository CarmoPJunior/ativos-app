from fastapi import APIRouter, Request as RequestFastApi
from typing import List, Optional

from backend.dto.venda_lucro_dto import VendaLucroOut
from backend.service.vendas_service import (obtemLucroVendasPorAno)

vendas_routes = APIRouter()

@vendas_routes.get("/vendas/lucro/ano/", response_model=List[VendaLucroOut])
async def listaLucroVendasPorAno(ano: Optional[int] = None):    
    """Lista o lucro obtido com as vendas dos ativos por ano"""

    anos = [] 
    if ano :
        anos.append(ano)
    # Convert Pandas DataFrame To dict
    df_lucro_vendas_por_ano = obtemLucroVendasPorAno(anos).to_dict('records')  
    
    lucroVenda = [
        VendaLucroOut(**venda) for venda in df_lucro_vendas_por_ano
    ]

    return lucroVenda