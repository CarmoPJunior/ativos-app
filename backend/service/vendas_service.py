import pandas as pd
from typing import List

from backend.config.sheet_enum import Sheet
from backend.config.sheets_configs import SheetPath

import warnings
warnings.simplefilter("ignore")

def obtemDadosVendas():

    df_vendas = pd.read_excel(
        SheetPath.PATH_SHEET_ATIVOS.value, 
        sheet_name=Sheet.VENDAS.value
    )
    
    df_vendas = trataDadosVendas(df_vendas)

    return df_vendas


def trataDadosVendas(df_vendas):

    df_vendas = df_vendas[['SIGLA','DATA DA VENDA','VALOR MÉDIO',
        'VALOR DE VENDA','QT','VALOR MÉDIO','VALOR VENDA',
        'LUCRO', '%Lucro', 'VALOR DA DARF']]

    df_vendas.rename(
        columns={
            'SIGLA': 'sigla',
            'LUCRO': 'lucro',
            'DATA DA VENDA': 'dataVenda'
        },
        inplace = True
    )

    df_vendas['dataVenda'] = pd.to_datetime(
            df_vendas['dataVenda'], infer_datetime_format=True
    )

    # remove linhas nulas
    df_vendas = df_vendas[df_vendas['sigla'].notnull()]

    df_vendas = df_vendas.round(2)
    
    return df_vendas


def agrupaLucroVendasPorMes():

    df_vendas = obtemDadosVendas()

    show_columns = ['dataVenda', 'lucro']
    lucro_vendas_por_mes  = df_vendas.groupby(
        [df_vendas['dataVenda'].dt.year.rename('ano'), 
        df_vendas['dataVenda'].dt.month.rename('mes')]
        )[show_columns].sum()  
    lucro_vendas_por_mes = lucro_vendas_por_mes.reset_index()
        
    return lucro_vendas_por_mes

def obtemLucroVendasPorAno(anos:List[int]):    
    
    lucro_vendas = agrupaLucroVendasPorMes()    

    if not anos:
        return lucro_vendas
        
    lucro_vendas = lucro_vendas[
        lucro_vendas.ano.isin(anos)
    ]
    return lucro_vendas


if __name__ == "__main__":
    print("chamado direto")
    lucro_vendas_por_mes = agrupaLucroVendasPorMes()
    lucro_vendas_por_ano = obtemLucroVendasPorAno(2022)
    lucro_vendas_por_ano.loc['total'] = lucro_vendas_por_ano.sum()
    print(lucro_vendas_por_ano)
else:
    print("chamado por import")