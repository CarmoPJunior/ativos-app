from fastapi import APIRouter, Request as RequestFastApi
from typing import List, Optional

from src.dto.ativos_lucro_dto import AtivosLucroOut
from src.service.lucro_ativos_service import obtemLucrosAtivosPorAno

ativos_routes = APIRouter()

@ativos_routes.get("/ativos/lucro/ano/", response_model=List[AtivosLucroOut])
async def listaLucroVendasPorAno(ano: Optional[int] = None):
    """Lista os lucros obtidos com os ativos por ano"""

    anos = []
    if ano :
        anos.append(ano)

    # Convert Pandas DataFrame To dict
    dfLucrosAtivosAno = obtemLucrosAtivosPorAno(anos).to_dict('records')

    lucrosAtivos = [
        AtivosLucroOut(**lucro) for lucro in dfLucrosAtivosAno
    ]

    return lucrosAtivos

