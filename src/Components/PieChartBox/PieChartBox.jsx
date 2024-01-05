import React from "react";
import { ResponsiveContainer, PieChart, Tooltip, Pie, Cell } from "recharts";
import "./PieChartBox.scss";
const data = [
  { name: "Mobile", value: 400, color: "#0088fe" },
  { name: "Desktop", value: 300, color: "#00c49f" },
  { name: "Laptop", value: 300, color: "#ffbb28" },
  { name: "Tablet", value: 200, color: "#ff8042" },
];

const PieChartBox = () => {
  return (
    <div className="pieChartBox">
      <h2>Leads By Source</h2>
      <div className="chart">
        <ResponsiveContainer width="99%" height={300}>
          <PieChart>
            <Tooltip
              contentStyle={{ background: 'yellowgreen', borderRadius: "5px" }}
            />
            <Pie
              data={data}
              innerRadius={"70%"}
              outerRadius={"100%"}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="options">
        {data.map((item) => (
          <div className="option" key={item.name}>
            <div className="title">
              <div className="dot" style={{ backgroundColor: item.color }} />

              <span>{item.name}</span>
            </div>
            <div>
              <span>{item.value}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChartBox;
