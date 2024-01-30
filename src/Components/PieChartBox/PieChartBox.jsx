import React from "react";
import { ResponsiveContainer, PieChart, Tooltip, Pie, Cell } from "recharts";
import "./PieChartBox.scss";
import { useQuery } from "@tanstack/react-query";
import { getAllProd } from "../../Api/AllProdApi";

const PieChartBox = () => {
  const { error, isPending, data } = useQuery({
    queryKey: ["All-Prod"],
    queryFn: getAllProd,
  });
  console.log("data...", data);

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  const countProductsByGender = (gender) => {
    return data.filter((prod) => prod.gender === gender).length;
  };

  const pieChartData = [
    { name: "Men", value: countProductsByGender("Men"), color: "#ff6f61" },
    { name: "Women", value: countProductsByGender("Women"), color: "#6fa8ff" },
    {
      name: "Unisex",
      value: countProductsByGender("Unisex"),
      color: "#6eff9d",
    },
  ];

  const maxCount = Math.max(
    countProductsByGender("Men"),
    countProductsByGender("Women"),
    countProductsByGender("Unisex")
  );

  const normalizeValue = (value) => {
    return value / maxCount;
  };

  return (
    <div className="pieChartBox">
      <text className="text-xl">Products By Gender</text>
      <div className="chart">
        <ResponsiveContainer width="99%" height={300}>
          <PieChart>
            <Tooltip
              contentStyle={{ background: "yellowgreen", borderRadius: "5px" }}
            />
            <Pie
              data={pieChartData}
              innerRadius={"70%"}
              outerRadius={"90%"}
              paddingAngle={5}
              dataKey="value"
            >
              {pieChartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.color}
                  scale={normalizeValue(entry.value)}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="options">
        {pieChartData.map((item) => (
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
