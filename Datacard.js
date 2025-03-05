import React from "react";

const DataCard = ({ title, value }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-xl shadow-md hover:shadow-lg transition">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-3xl font-bold text-green-400">{value}</p>
    </div>
  );
};

export default DataCard;
