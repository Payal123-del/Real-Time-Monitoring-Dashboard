import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const ChartComponent = ({ data }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-xl">
      <h2 className="text-xl font-semibold text-center mb-4">📈 System Performance</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timestamp" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="cpu" stroke="#8884d8" />
          <Line type="monotone" dataKey="memory" stroke="#82ca9d" />
          <Line type="monotone" dataKey="disk" stroke="#ffc658" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartComponent;
