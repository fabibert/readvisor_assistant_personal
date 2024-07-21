import requests
from readvisor_ai_assistant import app


def fetch_reviews():
    app.logger.info('START: Fetching reviews ...')
    url = "https://2e6751a4-1bcc-402d-955d-9efbbe1a51ff.mock.pstmn.io/bi/review"

    payload = ""
    headers = {}

    response = requests.request("GET", url, headers=headers, data=payload)
    app.logger.info('END: Fetched reviews successfully.')
    
    return response.text