# 📊 Data Visualization Dashboard (Flask + React)

A full-stack data visualization dashboard built with **Flask (Python)** for backend processing and **React + Chart.js** for frontend rendering. This app allows users to upload structured JSON files and instantly visualize their data in the form of bar, pie, or line charts.

---

## 🧱 Project Structure

PythonProject/
├── backend/
│ └── app.py # Flask API for processing JSON
├── frontend/
│ ├── src/ # React components
│ └── package.json
├── static/ & templates/ # Flask frontend fallback (optional)
├── data/ # JSON files or test datasets
├── .gitignore
└── README.md


---

## 🚀 Features

- Upload and parse `.json` datasets
- Real-time rendering with dynamic Chart.js charts
- Flask-based API handling of file and data logic
- Responsive React frontend UI
- Modular structure for scalability and future upgrades
- Error handling for invalid data formats

---

## 🔧 Tech Stack

| Layer        | Tools/Libraries         |
|--------------|--------------------------|
| Frontend     | React.js, Chart.js, CSS  |
| Backend      | Flask, Python            |
| Data Format  | JSON                     |
| State Mgmt   | React useState/useEffect |
| Testing      | Postman, DevTools        |
| Versioning   | Git + GitHub             |

---

## 📂 How to Run This Project (Locally)

### 🔹 Backend (Flask)
```bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install flask flask-cors
python app.py


---

🧠 Author
Abhay Rana
Final Year Project – Computer Science & Engineering
Roll No: 2121218
