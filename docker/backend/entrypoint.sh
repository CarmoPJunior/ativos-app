#!/bin/sh

cd /opt/backend
echo "Iniciando o streamlit ..."

streamlit run src/streamlit.py &

status=$?

if [ "$status" -eq "0" ] 
then
    echo "***** Iniciando a api *****"
    python run_api.py
fi

