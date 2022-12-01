from bs4 import BeautifulSoup

import requests

html = requests.get("https://finance.yahoo.com/quote/WEGE3.SA").content

soup = BeautifulSoup(html, 'html.parser')

print(soup.prettify())