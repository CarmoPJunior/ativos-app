import pandas as pd
from typing import List

from src.service.vendas_service import agrupaLucroVendasPorMes
from src.service.dividendos_service import  agrupaDividendosPorMes

def trataDados(lucro_venda_mais_dividendos):

    lucro_venda_mais_dividendos.rename(
        columns={
            'lucro': 'lucroVenda',
            'valor': 'valorDividendo'
        },
        inplace=True
    )

    lucro_venda_mais_dividendos = lucro_venda_mais_dividendos.round(2)

    return lucro_venda_mais_dividendos


def agrupaDividendoMaisLucroVendas():

    lucro_vendas_por_mes = agrupaLucroVendasPorMes()
    df_dividendos_por_mes = agrupaDividendosPorMes()

    lucro_venda_mais_dividendos = pd.merge(
        lucro_vendas_por_mes, df_dividendos_por_mes, on=["ano", "mes"],
        how="right"
    ).fillna(0)

# pd.merge(df1, df2, on=['id', 'name']).set_index(['id', 'name']).sum(axis=1)

    lucro_venda_mais_dividendos = trataDados(lucro_venda_mais_dividendos)

    return lucro_venda_mais_dividendos.eval(
        'totalLucroVendaDivendendo = lucroVenda + valorDividendo'
    )


def obtemLucrosAtivosPorAno(anos: List[int]):

    lucrosAtivos = agrupaDividendoMaisLucroVendas()

    if not anos:
        return lucrosAtivos

    lucrosAtivos = lucrosAtivos[
        lucrosAtivos.ano.isin(anos)
    ]
    return lucrosAtivos


if __name__ == "__main__":
    print("chamado direto")
else:
    print("chamado por import")
