import React from "react";
import "./ProductChartBox.scss";
import { Link } from "react-router-dom";
import { ResponsiveContainer, LineChart, Line, Tooltip } from "recharts";
import {AcUnit} from "@mui/icons-material";
import { useQuery } from "@tanstack/react-query";
import { getAllProd } from "../../Api/AllProdApi";

const ProductChartBox = () => {

  const {error, isPending , data} = useQuery({
    queryKey : ["all-products"],
    queryFn : getAllProd
  })

  if (isPending) return "Loading...";
  if (error) return "An error has occured: " + error.message;

  const chartData = data.map((item, index) => {
    return {
      name: item.name,
      products: item.type.reduce((acc, prod) => {
        acc += prod.price;
        return acc;
      }, 0) 
    };
  });

  return (
    <div className="chartBox">
      <div className="boxInfo">
        <div className="title">
          <AcUnit />
          <span className="totalUsr">Total Products</span>
        </div>
        {/* <h1>{number}</h1> */}
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
                dataKey="products"
                stroke="#ff7300"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="texts">
          <span className="percentage" style={{color: "limegreen"}}>{data.length}</span>
          <span className="duration">This month</span>
        </div>
      </div>
    </div>
  );
};

export default ProductChartBox;
