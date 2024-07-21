# Events
from readvisor_ai_assistant import socketio
from flask_socketio import emit
import json
from readvisor_ai_assistant.services import client
from readvisor_ai_assistant.services.openaiService import *


@socketio.on("connect")
def handle_connect():
    app.logger.info("Client connected!")

@socketio.on('message')
def handle_message(message):
    """ event listener """
    # TODO: WIP
    business_name = 'Palm Royale Cairns'
    business_type = 'Hotel'
    business_place = 'Cairns, Australia'
    business_desc = '''Palm Royale Cairns offers a peaceful respite from the stress of daily life. A place where you can unwind amongst lush tropical gardens, sparkling pools and Mediterranean-inspired architetcure. A place where you can relax knowing that we are taking every precaution to ensure you remain safe during your stay.'''
    instructions = f'''
                    You are a consultant for a {business_type}.
                    The {business_type} is located in {business_place}.
                    {business_desc}. 
                    Just answer in plaintext, no formatting.
                    '''
    
    json_message = {
        'user': business_name,
        'text': message
        }
    emit("chat", json.dumps(json_message), broadcast=True)
    
    #assistant_id = create_new_assistant(client, business_name, instructions)
    #thread_id = create_new_thread(client)
    # TODO store in db or so
    file_path="readvisor_ai_assistant/data/20240721_1274_reviews.json"
    assistant_id = 'asst_nbJYLKlcDoI3LbcB90pX3CHm'
    thread_id='thread_FdvDNEnUSiHGXnpbyQHhLS2b'
    #update_assistant_with_reviews(client,assistant_id,'readvisor_ai_assistant/data/1274_reviews.json')
    response = send_prompt(client, assistant_id, thread_id, message)

    json_reply = {
        'user': response.role,
        'text': response.content[0].text.value
    }

    emit("chat", json.dumps(json_reply), broadcast=True)
