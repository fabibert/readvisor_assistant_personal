from flask import render_template, request
from readvisor_ai_assistant import app

@app.route("/")
def hello():
    return render_template('chat.html')