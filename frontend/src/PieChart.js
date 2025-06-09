import React from "react";
import { Pie } from "react-chartjs-2";

const PieChart = ({ data = [] }) => {
    const topicCounts = data.reduce((acc, item) => {
        acc[item.topic] = (acc[item.topic] || 0) + 1;
        return acc;
    }, {});

    const chartData = {
        labels: Object.keys(topicCounts),
        datasets: [
            {
                data: Object.values(topicCounts),
                backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"]
            }
        ]
    };

    return <Pie data={chartData} />;
};

export default PieChart;