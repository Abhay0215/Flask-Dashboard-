import React, { useEffect, useState } from "react";
import axios from "axios";
import ChartComponent from "./Charts";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import RegionMap from "./RegionMap";
import "./Dashboard.css"; // ✅ Custom styles for better layout

const Dashboard = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [yearFilter, setYearFilter] = useState("");
    const [topicFilter, setTopicFilter] = useState("");
    const [regionFilter, setRegionFilter] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        applyFilters();
    }, [yearFilter, topicFilter, regionFilter]);

    const fetchData = async () => {
        const response = await axios.get("http://127.0.0.1:5000/api/data");
        setData(response.data);
        setFilteredData(response.data);
    };

    const applyFilters = () => {
        let filtered = data;
        if (yearFilter) filtered = filtered.filter(d => d.year === yearFilter);
        if (topicFilter) filtered = filtered.filter(d => d.topic === topicFilter);
        if (regionFilter) filtered = filtered.filter(d => d.region === regionFilter);
        setFilteredData(filtered);
    };

    return (
        <div className="dashboard-container">
            <h2 className="dashboard-title">📊 Data Visualization Dashboard</h2>

            {/* 🔹 Filter Controls */}
            <div className="filters">
                <select className="filter-dropdown" onChange={(e) => setYearFilter(e.target.value)}>
                    <option value="">📅 Select Year</option>
                    {[...new Set(data.map(d => d.year))].map(year => (
                        <option key={year} value={year}>{year}</option>
                    ))}
                </select>

                <select className="filter-dropdown" onChange={(e) => setTopicFilter(e.target.value)}>
                    <option value="">📌 Select Topic</option>
                    {[...new Set(data.map(d => d.topic))].map(topic => (
                        <option key={topic} value={topic}>{topic}</option>
                    ))}
                </select>

                <select className="filter-dropdown" onChange={(e) => setRegionFilter(e.target.value)}>
                    <option value="">🌍 Select Region</option>
                    {[...new Set(data.map(d => d.region))].map(region => (
                        <option key={region} value={region}>{region}</option>
                    ))}
                </select>
            </div>

            {/* 🔹 Multiple Charts in a Grid Layout */}
            <div className="charts-container">
                <div className="chart-box"><ChartComponent data={filteredData} /></div>
                <div className="chart-box"><LineChart data={filteredData} /></div>
                <div className="chart-box"><PieChart data={filteredData} /></div>
                <div className="chart-box"><RegionMap data={filteredData} /></div>
            </div>
        </div>
    );
};

export default Dashboard;