from dotenv import load_dotenv
import pandas as pd
import streamlit as st
import warnings
# import matplotlib.pyplot as plt
# warnings.simplefilter("ignore")
load_dotenv()

from st_aggrid import AgGrid, GridOptionsBuilder
from st_aggrid.shared import GridUpdateMode
from st_aggrid.shared import JsCode

from clear_vendas import agrupa_lucro_vendas_por_mes
from clear_vendas import obtem_lucro_vendas_por_ano
from clear_dividendos import agrupa_dividendos_por_mes


def agrupa_dividendo_mais_lucro_vendas(ano:list[int]):

    lucro_vendas_por_mes = agrupa_lucro_vendas_por_mes()
    df_dividendos_por_mes = agrupa_dividendos_por_mes()

    lucro_venda_mais_dividendos = pd.merge(
        lucro_vendas_por_mes, df_dividendos_por_mes, on = ["Ano", "Mes" ],
        how="right"
    ).fillna(0)
    # pd.merge(df1, df2, on=['id', 'name']).set_index(['id', 'name']).sum(axis=1)

    lucro_venda_mais_dividendos = lucro_venda_mais_dividendos[
        lucro_venda_mais_dividendos.Ano.isin(ano)
    ]

    return lucro_venda_mais_dividendos.eval('Sum = LUCRO + VALOR')


def main() -> None:

    st.header("Fidelity Account Overview :moneybag: :dollar: :bar_chart:")
    # st.title('Uber pickups llin NYC')

    data_load_state = st.text('Loading data...')
    data = agrupa_dividendo_mais_lucro_vendas([2022, 2021, 2020])
    data_load_state.text('Loading data...done!')

    with st.expander("Raw Dataframe"):
        st.write(data)

# ------- SIDEBAR
    st.sidebar.title("Investimentos")
    st.sidebar.header("Filtros")
    # st.sidebar.subheader("by CJ")

    st.sidebar.subheader("Filtro por ano")

    accounts = list(data.Ano.unique())
    account_selections = st.sidebar.multiselect(
        "Select Accounts to View", options=accounts, default=accounts
    )
# ------- SIDEBAR

    df = agrupa_dividendo_mais_lucro_vendas(account_selections)

    st.subheader("Vendas Por Mês")
    cellsytle_jscode = JsCode(
        """
    function(params) {
        if (params.value > 0) {
            return {
                'color': 'white',
                'backgroundColor': 'forestgreen'
            }
        } else if (params.value < 0) {
            return {
                'color': 'white',
                'backgroundColor': 'crimson'
            }
        } else {
            return {
                'color': 'white',
                'backgroundColor': 'slategray'
            }
        }
    };
    """
    )

    gb = GridOptionsBuilder.from_dataframe(df)
    gb.configure_columns(
        (
            "LUCRO",
        ),
        cellStyle=cellsytle_jscode,
    )

    gb.configure_pagination(paginationAutoPageSize=False,paginationPageSize=12)
    gb.configure_columns(("account_name", "symbol"), pinned=True)
    gridOptions = gb.build()

    AgGrid(df,
            gridOptions=gridOptions,
            fit_columns_on_grid_load=True,
            allow_unsafe_jscode=True)









if __name__ == "__main__":
    st.set_page_config(
        "Fidelity Account View by Gerard Bentley",
        "📊",
        initial_sidebar_state="expanded",
        layout="wide",
    )
    main()
