import uvicorn
import os
from dotenv import load_dotenv

if __name__ == "__main__":

    load_dotenv()
    print(f"---------->:{os.environ['API_PORT']}")
    uvicorn.run(
        "src.api:api",
        host=os.environ['API_HOST'],
        port=int(os.environ['API_PORT']),
        reload=os.environ['UVICORN_RELOAD'],
        # root_path='/api/v1'
    )
