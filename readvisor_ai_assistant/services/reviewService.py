import json
from readvisor_ai_assistant.controller.reviewController import fetch_reviews
from readvisor_ai_assistant import app


def save_reviews_to_json():
    try:
        response = fetch_reviews()
        location_id = '1274'
        file_path = f'readvisor_ai_assistant/data/{location_id}' + '_reviews.json'
        with open(file_path, 'w') as file:
            json.dump(response, file)
            app.logger.info(f'{file_path} saved successfully')
            return True
    except Exception as e:
        app.logger.warning(f'{file_path} save failed')
        return False 