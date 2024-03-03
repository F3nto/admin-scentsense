import React from "react";
import "./UserChartBox.scss";
import { Link } from "react-router-dom";
import { ResponsiveContainer, LineChart, Line, Tooltip } from "recharts";
import { useQuery } from "@tanstack/react-query";
import { getOrderList } from "../../Api/OrderListApi";
import { getUserData } from "../../Api/UserApi";
import { PeopleAlt } from "@mui/icons-material";

const UserChartBox = () => {
  const {
    error: orderListError,
    isPending: isOrderListPending,
    data: orderListData,
  } = useQuery({
    queryKey: ["all-order-list"],
    queryFn: getOrderList,
  });

  const {
    error: userDataError,
    isPending: isUserDataPending,
    data: userData,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getUserData,
  });

  if (isOrderListPending || isUserDataPending) return <div>Loading...</div>;

  if (orderListError)
    return (
      <div>
        An error occurred while fetching order list: {orderListError.message}
      </div>
    );
  if (userDataError)
    return (
      <div>
        An error occurred while fetching user data: {userDataError.message}
      </div>
    );

  const chartData = orderListData.map((order, index) => ({
    index,
    totalPrice: order.totalPrice,
  }));

  return (
    <div className="chartBox">
      <div className="boxInfo">
        <div className="title">
          <PeopleAlt />
          <span className="totalUsr">Total User</span>
        </div>
        <Link to="/">View All</Link>
      </div>
      <div className="chartInfo">
        <div className="chart">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart data={chartData}>
              <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{ display: "none" }}
                position={{ x: 10, y: 60 }}
              />
              <Line
                type="monotone"
                dataKey="totalPrice"
                stroke="limegreen"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="texts">
          <span className="percentage" style={{ color: "limegreen" }}>
            {userData.length}
          </span>
          <span className="duration">This month</span>
        </div>
      </div>
    </div>
  );
};

export default UserChartBox;
