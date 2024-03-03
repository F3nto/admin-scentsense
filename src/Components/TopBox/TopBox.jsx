import React from "react";
import "./TopBox.scss";
import { getOrderList } from "../../Api/OrderListApi";
import {useQuery} from "@tanstack/react-query"

const TopBox = () => {

  const {error, isPending , data} = useQuery({
    queryKey : ["all-order-list"],
    queryFn : getOrderList
  })

  console.log("orderlist data...", data)
  

  if (isPending) return "Loading...";
  if (error) return "An error has occured: " + error.message;

  return (
    <div className="topBox h-full">
      <h2>Top Deals</h2>

      <div className="list scrollbar-thin scrollbar-thumb-rounded scrollbar-track-[#174b5c] scrollbar-thumb-[#162e36] h-[500px] overflow-y-auto -mr-3 overflow-x-auto">
        {data.map((user) => (
          <div className="listItem" key={user.id}>
            <div className="user ">
            <div
              className="bg-slate-700 w-10 h-10 rounded-full flex justify-center items-center
              "
            >
              <text className="text-white text-xl font-fontbody">
                {user.username.charAt(0).toUpperCase()}
              </text>
            </div>
              <div className="userTexts -ml-4">
                  {user.username}
              </div>
            </div>
            <span className="amount mr-2">${user.totalPrice}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBox;
