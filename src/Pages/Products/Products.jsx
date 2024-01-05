import React, { useState } from "react";
import { products } from "../../data";
import DataTable from "../../Components/DataTable/DataTable";
import Add from "../../Components/Add/Add";
import { useQuery } from "@tanstack/react-query";

const dataGridColumns = [
  {
    field: "Image",
    headerName: "Avator",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "https://shorturl.at/xFH29"} alt="" />;
    },
  },
  {
    field: "title",
    type: "string",
    headerName: "Title",
    width: 250,
  },
  {
    field: "color",
    type: "string",
    headerName: "Color",
    width: 100,
  },
  {
    field: "price",
    type: "string",
    headerName: "Price",
    width: 100,
  },
  {
    field: "producer",
    headerName: "Producer",
    type: "string",
    width: 100,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 150,
    type: "string",
  },
  {
    field: "inStock",
    headerName: "In Stock",
    width: 100,
    type: "boolean",
  },
];
const Products = () => {
  const [open, setOpen] = useState(false);

  const { isLoading, data } = useQuery({
    queryKey: ["allproducts"],
    queryFn: async () => {
      const res = await fetch("http://localhost:8800/api/products");
      return res.json();
    },
  });

  return (
    <>
      <div className="user">
        <div className="info">
          <h2>Users</h2>
          <button onClick={() => setOpen(true)}>Add New Product</button>
        </div>

        {isLoading ? (
          "Loading "
        ) : (
          <DataTable slug="products" columns={dataGridColumns} rows={data} />
        )}
      </div>
      {open && (
        <Add slug="products" columns={dataGridColumns} setOpen={setOpen} />
      )}
    </>
  );
};

export default Products;
