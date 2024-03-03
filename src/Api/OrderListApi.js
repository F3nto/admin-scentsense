import axios from "axios";

const orderListApi = axios.create({
  baseURL: "http://localhost:4000/api/v1/order-list/all-orderlist",
});
export const getOrderList = async () => {
    const response = await orderListApi.get("/");
    return response.data;
 
};
