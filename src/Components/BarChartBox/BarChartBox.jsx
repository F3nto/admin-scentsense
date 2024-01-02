import React from "react";
import "./BarChartBox.scss";
import { ResponsiveContainer, BarChart, Bar, Tooltip } from "recharts";
const BarChartBox = ({ data }) => {
  const { title, color, dataKey, chartData } = data;

  return (
    <div className="barChartBox">
      <h1>{title}</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={150}>
          <BarChart data={chartData}>
            <Tooltip
              contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
              labelStyle={{ display: "none" }}
              cursor={{fill : "none"}}
            />

            <Bar dataKey={dataKey} fill={color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChartBox;
