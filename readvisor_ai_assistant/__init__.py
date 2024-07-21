"""
This module is the entry point for the readvisor_ai_assistant package.
flask --app readvisor_ai_assistant run --debug
"""

from flask import Flask
from flask_socketio import SocketIO
from logging.config import dictConfig

dictConfig({
    'version': 1,
    'formatters': {'default': {
        'format': '[%(asctime)s] %(levelname)s in %(module)s: %(message)s',
    }},
    'handlers': {'wsgi': {
        'class': 'logging.StreamHandler',
        'stream': 'ext://flask.logging.wsgi_errors_stream',
        'formatter': 'default'
    }},
    'root': {
        'level': 'INFO',
        'handlers': ['wsgi']
    }
})

__version__ = "0.1.0"

app = Flask(__name__)
socketio = SocketIO(app)

import readvisor_ai_assistant.views
import readvisor_ai_assistant.controller
import readvisor_ai_assistant.events
import readvisor_ai_assistant.services



