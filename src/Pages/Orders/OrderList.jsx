import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getOrderList } from "../../Api/OrderListApi";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
const OrderList = () => {
  const { error, isPending, data } = useQuery({
    queryKey: ["all-order-list"],
    queryFn: getOrderList,
  });

  if (isPending) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  const columns = [
    { field: "id", headerName: "Order ID", width: 200 },
    {
      field: "img",
      headerName: "Image",
      width: 100,
      renderCell: (params) => (
        <img
          src={params.value}
          alt="Product"
          style={{ width: "50%", height: "auto" }}
        />
      ),
    },
    { field: "username", headerName: "Username", width: 100 },
    { field: "totalPrice", headerName: "Total Price", width: 100 },
    { field: "address", headerName: "Address", width: 150 },
    { field: "city", headerName: "City", width: 150 },
    { field: "phone", headerName: "Phone", width: 150 },
    { field: "date", headerName: "Date", width: 200 },
    { field: "items", headerName: "Items", width: 400 },
  ];

  const rows = data.map((order) => ({
    id: order._id,
    img: order.items[0].img,
    username: order.username,
    totalPrice: order.totalPrice,
    address: order.address,
    city: order.city,
    phone: order.phone,
    date: new Date(order.date).toLocaleString(),
    items: order.items
      .map(
        (item) =>
          `${item.name} (${item.quantity}) - ${item.size}ml - $${item.price}`
      )
      .join(", "),
  }));

  return (
    <div style={{ height: "100%", width: "90%" }}>
      <h2 className="text-2xl font-bold mb-4">Order List</h2>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          className="bg-white"
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10, 20]}
          checkboxSelection
          components={{
            Toolbar: GridToolbar,
          }}
        />
      </div>
    </div>
  );
};

export default OrderList;
