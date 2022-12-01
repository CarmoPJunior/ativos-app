from pydantic import BaseModel, validator

class AtivosLucroOut(BaseModel):
    ano: int
    mes: int
    lucroVenda: float
    valorDividendo: float
    totalLucroVendaDivendendo: float

