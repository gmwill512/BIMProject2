import React from "react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from "recharts";

const data = [
    {
      label: "Group 1",
      0: 0,
      25: 8.3,
      50: 4.8,
      75: 8.7,
      100: 36.1,
      125: 29.6,
      150: 8.3,
      200: 3.9,
      "200 <=": 0.4,
    },
    {
      label: "Group 2",
      0: 0,
      25: 4,
      50: 12.1,
      75: 18.8,
      100: 25.9,
      125: 21.4,
      150: 12.1,
      200: 4,
      "200 <=": 1.8,
    }
]
const colors = ["#000000", "#3f51b5", "#4caf50", "#9acd32", "#ffff00", "#ff9800", "#ff4500", "#ff0000"];

const StackedBarChart = () => {
  // Compute the percentage for each data point
  const formattedData = data.map((d) => {
    const total = Object.values(d).reduce((acc, val) => (typeof val === "number" ? acc + val : acc), 0);
    const formatted = { label: d.label };
    Object.entries(d).forEach(([key, value]) => {
      if (typeof value === "number") {
        formatted[key] = (value / total) * 100;
      }
    });
    return formatted;
  });

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={formattedData} margin={{ top: 20, right: 20, bottom: 30, left: 40 }}>
        <XAxis dataKey="label" />
        <YAxis tickFormatter={(value) => `${value}%`} domain={[0, 100]} ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]} />
        <CartesianGrid stroke="#CCCCCC" strokeWidth={1} />
        {Object.keys(data[0])
          .slice(1, -1)
          .map((key, i) => (
            <Bar key={key} dataKey={key} stackId="stack" fill={colors[i % colors.length]} />
          ))}
      </BarChart>
    </ResponsiveContainer>
  );
};

export default StackedBarChart;
