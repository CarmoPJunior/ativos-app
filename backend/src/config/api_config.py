from enum import Enum


class ApiConfig(Enum):
    """Este arquivo guarda as configurações da fast-api"""

    ROOT_PATH = "/api/v1"
    URL_DOCS_API = f'{ROOT_PATH}/documentation'
    CORS_ALLOW_ORIGINS = ["*"]
    CORS_ALLOW_METHODS = ["*"]
    CORS_ALLOW_HEADERS = ["*"]
    DESCRIPTION = """
# Ativos API. 🚀

## Ativos

Você está Habilitado a:

* **Read Ativos** (_em construção_).
"""
    TITLE = "Ativos API"
    VERSION = "0.0.1"
    TERMS_OF_SERVICE = "http://example.com/terms/"
    CONTACT = {
        "name": "C. Júnior",
        "url": "http://localhost/contact/",
        "email": "carmo.goncalves.jr@hotmail.com"
    }
    LICENSE_INFO = {
        "name": "Apache 2.0",
        "url": "https://www.apache.org/licenses/LICENSE-2.0.html",
    }
    TAGS_METADATA = [
        {
            "name": "Root",
            "description": "Raiz da Api.",
            "externalDocs": {
                "description": "Docs Externo",
                "url": "https://localhost",
            },
        },
        {
            "name": "Ativos Dividendos",
            "description": "Lista os dividendos recebidos."
        },
        {
            "name": "Ativos Lucro Vendas",
            "description": "Lista o lucro obtido com as vendas dos ativos."
        },
        {
            "name": "Ativos Lucro Geral",
            "description": "Lista os lucros obtidos com os ativos."
        },
    ]
