import React from "react";
import { ResponsiveContainer, PieChart, Tooltip, Pie, Cell } from "recharts";
import "./PieChartBox.scss";
import { useQuery } from "@tanstack/react-query";
import { getAllProd } from "../../Api/AllProdApi";
import { getTreasureProd } from "../../Api/TreasureProdApi";

const PieChartBox = () => {
  const { error : allProdError, isPending : allProdPending, data : allProdData } = useQuery({
    queryKey: ["All-Prod"],
    queryFn: getAllProd,
  });

  const {error : treasureProdError, isPending : treasureProdPending, data : treasureProdData} = useQuery({
    queryKey : ["Treasure-products"],
    queryFn : getTreasureProd
  })

  

  if (allProdPending || treasureProdPending) return "Loading...";

  if (allProdError)
    return "An error has occurred for All Products: " + allProdError.message;
  if (treasureProdError)
    return (
      "An error has occurred for Treasure Products: " +
      treasureProdError.message
    );


  const mergedData = [
    ...allProdData.map((prod) => ({...prod, type : "Regular"})),
    ...treasureProdData.map((prod) => ({...prod, type : "Treasure"}))
  ]

  const countProdByGender = (gender, type) => {
    return mergedData.filter(prod => prod.gender === gender && prod.type === type).length;
  }

  const pieChartData = [
    { name: "Men", type: "Regular", value: countProdByGender("Men", "Regular"), color: "#ff6f61" },
    { name: "Women", type: "Regular", value: countProdByGender("Women", "Regular"), color: "#6fa8ff" },
    { name: "Unisex", type: "Regular", value: countProdByGender("Unisex", "Regular"), color: "#6eff9d" },
    { name: "Treasure set for Men", type: "Treasure", value: countProdByGender("Men", "Treasure"), color: "#5859f3" },
    { name: "Treasure set for Women", type: "Treasure", value: countProdByGender("Women", "Treasure"), color: "#698743" },
    { name: "Treasure set for Unisex", type: "Treasure", value: countProdByGender("Unisex", "Treasure"), color: "#ff6f" }
  ];

  const maxCount = Math.max(
    countProdByGender("Men", "Regular"),
    countProdByGender("Women", "Regular"),
    countProdByGender("Unisex", "Regular"),
    countProdByGender("Men", "Treasure"),
    countProdByGender("Women", "Treasure"),
    countProdByGender("Unisex", "Treasure")
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
              <span>({item.value})</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChartBox;
