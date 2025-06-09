import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    LineElement,  // ✅ Fix "line" is not registered error
    PointElement,
    ArcElement,
    BarElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";
import { Line } from "react-chartjs-2";  // ✅ Import Line Chart

// ✅ Register all required elements
ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,  // ✅ Fix for Line Chart
    PointElement,
    ArcElement,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const ChartComponent = ({ data = [] }) => {
    const chartData = {
        labels: data.map(item => item.topic || "Unknown"),
        datasets: [
            {
                label: "Intensity",
                data: data.map(item => item.intensity || 0),
                borderColor: "rgba(75,192,192,1)",  // ✅ Line color
                backgroundColor: "rgba(75,192,192,0.4)",
                borderWidth: 2,
                fill: true
            }
        ]
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: { display: true },
            title: { display: true, text: "Data Visualization" }
        },
        scales: {
            x: { type: "category" },
            y: { beginAtZero: true }
        }
    };

    return <Line data={chartData} options={chartOptions} />;
};

export default ChartComponent;