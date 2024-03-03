import React from "react";
import "./ConverChartBox.scss";
import { Link } from "react-router-dom";
import { ResponsiveContainer, LineChart, Line, Tooltip } from "recharts";

const ConverChartBox = ({data}) => {
  const { color, icon, title, number, dataKey, percentage, chartData } = data;

  return (
    <div className="chartBox">
      <div className="boxInfo">
        <div className="title">
          {icon}
          <span className="totalUsr">{title}</span>
        </div>
        <h1>{number}</h1>
        <Link to="/">View All</Link>
      </div>
      <div className="chartInfo">
        <div className="chart">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart data={chartData}>
              <Tooltip 
              contentStyle={{background:"transparent", border:"none"}}
              labelStyle={{display:"none"}}
              position={{ x:10, y:60}}
              />
              <Line
                type="monotone"
                dataKey={dataKey}
                stroke={color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="texts">
          <span className="percentage" style={{color: percentage < 0 ? "tomato" : "limegreen"}}>{percentage}</span>
          <span className="duration">This month</span>
        </div>
      </div>
    </div>
  );
};

export default ConverChartBox;
