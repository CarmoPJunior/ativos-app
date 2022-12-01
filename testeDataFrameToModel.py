from pydantic import BaseModel
import pandas as pd
from typing import List, Optional

class SomeModel(BaseModel):
    col1: str
    col2: str

class DividendosOut(BaseModel):
    price: int
    product: Optional[str]


data = [SomeModel(**{'col1': 'foo', 'col2': 'bar'})] * 10
teste = pd.DataFrame(data)

print(teste)


data = {'product': ['Tablet', 'Printer', 'Laptop', 'Monitor'],
        'price': [250, 100, 1200, 300]
        }

df = pd.DataFrame(data)

# df['price'] =df['price'].astype('str')
# df['product'] =df['product'].astype('str')
from pydantic import parse_obj_as

print(type(df))
# print(df.info())

m = parse_obj_as(List[DividendosOut], df)

dic = df.to_dict('records')
print(dic)
# convert = [DividendosOut(**dic)] 

convert = [
  DividendosOut(**user) for user in dic
]

print(convert)
# for x in convert:
#   print(type(x.product))

# products_list = df.values.tolist()
# print(products_list)

# from pydantic import BaseModel
# import pandas as pd
# from fastapi.encoders import jsonable_encoder
# class SomeModel(BaseModel):
#     col1: int
#     col2: str

# data = [SomeModel(col1=1,col2="foo"),SomeModel(col1=2,col2="bar")]*4*10**5

# import cProfile

# cProfile.run( 'pd.DataFrame([s.dict() for s in data])' ) # around 8.2s
# cProfile.run( 'pd.DataFrame(jsonable_encoder(data))' ) # around 30.8s
# cProfile.run( 'pd.DataFrame([s.__dict__ for s in data])' ) # around 1.7s
# cProfile.run( 'pd.DataFrame([dict(s) for s in data])' ) # around 3s