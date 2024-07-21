from readvisor_ai_assistant import app

def create_new_assistant(client, business_name,instructions):
    app.logger.info('START: Create new AI assistant ...')
    assistant = client.beta.assistants.create(
        name=business_name,
        instructions=instructions,
        tools=[{"type": "code_interpreter", "type": "file_search"}],
        model="gpt-4-turbo",
     )
    app.logger.info(f'END: New AI assistant created: {assistant.id}')
    return assistant.id

def create_new_thread(client):
    thread = client.beta.threads.create()
    return thread.id

def update_assistant_with_files(client, assistant_id, file_paths):

    vector_store = client.beta.vector_stores.create(name="Reviews")
    file_streams = [open(path, "rb") for path in file_paths]
    

    file_batch = client.beta.vector_stores.file_batches.upload_and_poll(
    vector_store_id=vector_store.id, files=file_streams
    )

    assistant = client.beta.assistants.update(
    assistant_id=assistant_id,
    tool_resources={"file_search": {"vector_store_ids": [vector_store.id]}},
    )
    return assistant_id

def update_assistant_with_reviews(client, assistant_id,file_path):
    app.logger.info('START: Update AI assistant ...')

    file = client.files.create(file=open(file_path, "rb"), purpose='assistants')

    assistant = client.beta.assistants.update(
    assistant_id=assistant_id,
    tools=[{"type": "code_interpreter"}],
    tool_resources={
        "code_interpreter": {
        "file_ids": [file.id]
        }
    }
  )
    app.logger.info('END: AI assistant updated')
    return assistant_id

def send_prompt(client, assistant_id, thread_id, message):
    additional_instructions=""
    prompt = additional_instructions + message

    message = client.beta.threads.messages.create(
        thread_id=thread_id,
        role="user",
        content=prompt,
    )
    run = client.beta.threads.runs.create_and_poll(
        thread_id=thread_id,
        assistant_id=assistant_id
    )

    response_message = None
    messages = client.beta.threads.messages.list(thread_id=thread_id).data

    for message in messages:
        return message