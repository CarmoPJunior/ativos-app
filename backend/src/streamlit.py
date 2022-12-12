from dotenv import load_dotenv
import streamlit as st
import sys
from st_aggrid import AgGrid, GridOptionsBuilder
from st_aggrid.shared import JsCode
import pandas as pd

load_dotenv()
sys.path.append(".")
from service.lucro_ativos_service import obtemLucrosAtivosPorAno


def main() -> None:

    st.header("Lucro Ativos :moneybag: :dollar: :bar_chart:")
    # st.title('title')

    data_load_state = st.text('Obtendo dados...')
    data = obtemLucrosAtivosPorAno([2022, 2021, 2020])
    data_load_state.text('Dados carregados... !')

    with st.expander("Raw Dataframe"):
        st.write(data)

# ------- SIDEBAR
    st.sidebar.title("Investimentos")
    st.sidebar.header("Filtros")

    st.sidebar.subheader("Filtro por ano")

    yearsSelection = list(data.ano.unique())
    selectedYears = st.sidebar.multiselect(
        "Selecione um ano",
        options=yearsSelection,
        default=yearsSelection
    )
# ------- SIDEBAR

    st.subheader("Vendas Por Mês")
    cellsytle_jscode = JsCode(
        """
    function(params) {
        if (params.value > 0) {
            return {
                'color': 'white',
                'backgroundColor': '#0ea600'
            }
        } else if (params.value < 0) {
            return {
                'color': 'white',
                'backgroundColor': 'rgb(255, 75, 75)'
            }
        } else {
            return {
                'color': 'black',
                'backgroundColor': 'white'
            }
        }
    };
    """
    )

    # Filtra o dataframe por ano
    dfLucroAtivosAno = obtemLucrosAtivosPorAno(selectedYears)

    # Trata os dados do dataframe
    dfLucroAtivosAno['mesAno'] = dfLucroAtivosAno[['mes', 'ano']].astype(str).apply('-'.join, axis=1)
    dfLucroAtivosAno['mesAno'] = pd.to_datetime(dfLucroAtivosAno['mesAno'])
    dfLucroAtivosAno['mesAno'] = dfLucroAtivosAno['mesAno'].dt.strftime('%m-%Y')
    dfLucroAtivosAno.drop(["mes", "ano"], axis=1, inplace=True)

    # Monta a tabela
    gb = GridOptionsBuilder.from_dataframe(dfLucroAtivosAno)
    gb.configure_columns(
        ("lucroVenda", "valorDividendo", "totalLucroVendaDividendo"),
        cellStyle=cellsytle_jscode,
    )

    gb.configure_pagination(
            paginationAutoPageSize=False, paginationPageSize=12)
    gb.configure_columns(('mesAno'), pinned=True)
    gridOptions = gb.build()
    AgGrid(dfLucroAtivosAno, gridOptions=gridOptions,
        fit_columns_on_grid_load=True, allow_unsafe_jscode=True)


if __name__ == "__main__":
    st.set_page_config(
        "Ativos",
        "📊",
        initial_sidebar_state="expanded",
        layout="wide",
    )
    main()
