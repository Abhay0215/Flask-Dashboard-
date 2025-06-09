import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = ({ data = [] }) => {
    const chartData = {
        labels: data.map(item => item.year || "Unknown"),
        datasets: [
            {
                label: "Yearly Intensity",
                data: data.map(item => item.intensity || 0),
                borderColor: "rgba(255,99,132,1)",
                backgroundColor: "rgba(255,99,132,0.2)"
            }
        ]
    };

    return <Line data={chartData} />;
};

export default LineChart;