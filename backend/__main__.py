import pandas as pd
import streamlit as st
import warnings
import matplotlib.pyplot as plt
warnings.simplefilter("ignore")

from backend.service.vendas_service import obtemLucroVendasPorAno
from backend.service.dividendos_service import obtemDividendosPorAno
from backend.service.lucro_ativos_service import obtemLucrosAtivosPorAno

# Lucro vendas por ano
df_lucro_vendas_por_ano = obtemLucroVendasPorAno([2022])
print(df_lucro_vendas_por_ano)

# Lucro dividendos por ano
df_dividendos_por_ano = obtemDividendosPorAno([])
print(df_dividendos_por_ano)

# Lucros ativos por ano
df_dividendo_mais_lucro_vendas = obtemLucrosAtivosPorAno([])
df_dividendo_mais_lucro_vendas.loc['total'] = df_dividendo_mais_lucro_vendas.sum()
print(df_dividendo_mais_lucro_vendas)

if __name__ == "__main__":    
    print("chamado direto")

