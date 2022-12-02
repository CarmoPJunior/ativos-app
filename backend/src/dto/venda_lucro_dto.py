from datetime import datetime
from pydantic import BaseModel, validator
from fastapi import HTTPException, status


class VendaLucroOut(BaseModel):
    ano: int
    mes: int
    lucro: float
