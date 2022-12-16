from fastapi import APIRouter, Query
from typing import List, Optional

from src.dto.ativos_lucro_dto import AtivosLucroOut
from src.service.lucro_ativos_service import obtemLucrosAtivosPorAno

ativos_routes = APIRouter(prefix="/ativos")


@ativos_routes.get("/lucro/ano/", response_model=List[AtivosLucroOut])
async def listaLucroAtivosPorAno(anos: list[int] | None = Query(default=[])):
    """Lista os lucros obtidos com os ativos por ano"""

    # Convert Pandas DataFrame To dict
    dfLucrosAtivosAno = obtemLucrosAtivosPorAno(anos).to_dict('records')

    lucrosAtivos = [
        AtivosLucroOut(**lucro) for lucro in dfLucrosAtivosAno
    ]

    return lucrosAtivos
