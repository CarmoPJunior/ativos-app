import pandas as pd
from typing import List

from src.config.sheet_enum import Sheet
from src.config.sheets_configs import SheetPath


def obtemDadosDividendos():

    df_dividendos = pd.read_excel(
        SheetPath.PATH_SHEET_ATIVOS.value,
        sheet_name=Sheet.DIVIDENDOS.value)
    df_dividendos = trataDadosDividendos(df_dividendos)

    return df_dividendos

def trataDadosDividendos(df_dividendos):

    df_dividendos.rename(
        columns={
            'VALOR': 'valor',
            'DATA': 'data'
        },
        inplace = True
    )

    df_dividendos['data'] = pd.to_datetime(
        df_dividendos['data'], infer_datetime_format=True
    )

    df_dividendos = df_dividendos.round(2)

    return df_dividendos

def agrupaDividendosPorMes():

    df_dividendos = obtemDadosDividendos()
    show_columns = ['data', 'valor']

    dividendos_por_mes  = df_dividendos.groupby(
        [df_dividendos['data'].dt.year.rename('ano'),
        df_dividendos['data'].dt.month.rename('mes')]
    )[show_columns].sum()

    dividendos_por_mes = dividendos_por_mes.reset_index()

    return dividendos_por_mes

def obtemDividendosPorAno(anos:List[int]):
    df_dividendos_por_mes = agrupaDividendosPorMes()

    if not anos:
        return df_dividendos_por_mes

    df_dividendos_por_mes = df_dividendos_por_mes[
        df_dividendos_por_mes.ano.isin(anos)
    ]

    return df_dividendos_por_mes


if __name__ == "__main__":
    print("chamado direto")
    df_dividendos_por_mes = agrupaDividendosPorMes()
    print(df_dividendos_por_mes)
else:
    print("chamado por import")


