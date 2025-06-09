import json
from pymongo import MongoClient

# Connect to MongoDB
client = MongoClient("mongodb://localhost:27017/")
db = client["data_dashboard"]
collection = db["data"]

# Load JSON file
with open("frontend/src/package.json", "r", encoding="utf-8") as file:
    data = json.load(file)

# Insert data into MongoDB
collection.insert_many(data)

print("✅ Data successfully inserted into MongoDB")