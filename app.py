from flask import Flask, jsonify, request
from flask_cors import CORS
from pymongo import MongoClient

app = Flask(__name__)
CORS(app)

# Connect to MongoDB
client = MongoClient("mongodb://localhost:27017/")
db = client["data_dashboard"]
collection = db["data"]

# API Route to Fetch Filtered Data
@app.route("/api/data", methods=["GET"])
def get_data():
    filters = {}

    if "year" in request.args:
        filters["year"] = request.args["year"]
    if "country" in request.args:
        filters["country"] = request.args["country"]
    if "topic" in request.args:
        filters["topic"] = request.args["topic"]

    data = list(collection.find(filters, {"_id": 0}))  # Remove MongoDB _id field

    return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True)