import React from "react";
import {
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  Area,
  XAxis,
  YAxis,
} from "recharts";
import "./BigChartBox.scss";
import { useQuery } from "@tanstack/react-query";
import { getOrderList } from "../../Api/OrderListApi";

const BigChartBox = () => {
  const { error, isPending, data } = useQuery({
    queryKey: ["all-order-list"],
    queryFn: getOrderList,
  });

  console.log("orderlist data...", data);

  if (isPending) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  const monthlySales = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    10: 0,
    11: 0,
  };

  data.forEach((order) => {
    const month = new Date(order.date).getMonth();
    monthlySales[month] += order.totalPrice;
  });

  const dataSet = [
    { name: "Jan", totalSale: monthlySales[0] },
    { name: "Feb", totalSale: monthlySales[1] },
    { name: "Mar", totalSale: monthlySales[2] },
    { name: "Apr", totalSale: monthlySales[3] },
    { name: "May", totalSale: monthlySales[4] },
    { name: "Jun", totalSale: monthlySales[5] },
    { name: "Jul", totalSale: monthlySales[6] },
    { name: "Aug", totalSale: monthlySales[7] },
    { name: "Sep", totalSale: monthlySales[8] },
    { name: "Oct", totalSale: monthlySales[9] },
    { name: "Nov", totalSale: monthlySales[10] },
    { name: "Dec", totalSale: monthlySales[11] },
  ];
  return (
    <div className="bigChartBox">
      <h2>Revenue Analytics</h2>
      <div className="chart">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={400}
            data={dataSet}
            margin={{
              top: 5,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="2 3" />
            <XAxis dataKey="name" className="text-sm" />
            <YAxis />
            <Tooltip
              contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
              labelStyle={{ display: "none" }}
              cursor={{ fill: "none" }}
            />
            <Area
              type="monotone"
              dataKey="totalSale"
              stackId="1"
              stroke="#05f545"
              fill="#05f545"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BigChartBox;
