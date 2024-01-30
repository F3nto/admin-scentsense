import React, { useState } from "react";
import { products } from "../../data";
import DataTable from "../../Components/DataTable/DataTable";
import Add from "../../Components/Add/Add";
import { useQuery } from "@tanstack/react-query";

const dataGridColumns = [
  {
    field: "img",
    headerName: "Image",
    width: 120,
  },
  { field: "name", headerName: "Name", width: 200 },
  { field: "brand", headerName: "Brand", width: 150 },
  { field: "desc", headerName: "Description", flex: 1 },
  { field: "gender", headerName: "Gender", width: 120 },
  { field: "instock", headerName: "In Stock", width: 120 },
  { field: "price", headerName: "Price", width: 120 },
  { field: "size", headerName: "Size", width: 120 },
];
const Products = () => {
  const [open, setOpen] = useState(false);

  const { isLoading, data } = useQuery({
    queryKey: ["allproducts"],
    queryFn: async () => {
      const res = await fetch("http://localhost:4000/api/v1/all-products");
      const products = await res.json();
      const productsWithId = products.map((product) => ({
        ...product,
        id: product._id,
      }));

      return productsWithId;
    },
  });

  return (
    <>
      <div className="user">
        <div className="info">
          <h2>Products</h2>
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
