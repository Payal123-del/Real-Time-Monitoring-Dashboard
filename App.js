import React, { useEffect, useState } from "react";
import "./App.css";
import "./index.css";
import DataCard from "./components/Datacard";
import ChartComponent from "./components/linechart";

const generateRandomData = () => ({
  cpu: (Math.random() * 100).toFixed(2),
  memory: (Math.random() * 100).toFixed(2),
  disk: (Math.random() * 100).toFixed(2),
  timestamp: new Date().toLocaleTimeString(),
});

const App = () => {
  const [data, setData] = useState([generateRandomData()]);

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prevData) => [...prevData.slice(-9), generateRandomData()]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-8 flex flex-col items-center">
      <h1 className="text-4xl font-extrabold mb-8 tracking-wide text-blue-400 drop-shadow-lg">
        📊 Real-Time Monitoring Dashboard
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-4xl">
        <DataCard title="🔥 CPU Usage" value={`${data[data.length - 1].cpu}%`} />
        <DataCard title="🖥 Memory Usage" value={`${data[data.length - 1].memory}%`} />
        <DataCard title="💾 Disk Usage" value={`${data[data.length - 1].disk}%`} />
      </div>
      <div className="mt-8 w-full max-w-4xl">
        <ChartComponent data={data} />
      </div>
    </div>
  );
};

export default App;
