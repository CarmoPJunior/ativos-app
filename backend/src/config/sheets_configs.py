import os
from enum import Enum


class SheetPath(Enum):
    PATH_SHEET_ATIVOS = os.environ['PLANILHA_ATIVOS']
