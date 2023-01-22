from flask import Flask, jsonify, render_template
import random

templates = [
    {
        "inputs": 5,
        "category": "Sports",
        "word": "chess"
    },
    {
        "inputs": 6,
        "category": "European Country",
        "word": "france"
    }
]

app = Flask(__name__)

@app.route("/")
def index():
    render_template("index.html")

@app.route("/get-template")
def get_template():
    jsonify({
        "status": "success",
        "word": random.choice(templates)
    })