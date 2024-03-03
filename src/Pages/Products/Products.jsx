import React, { useState, useEffect } from "react";
import DataTable from "../../Components/DataTable/DataTable";
import Add from "../../Components/Add/Add";
import axios from "axios";

const Products = () => {
  const [open, setOpen] = useState(false);
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/all-products"
        );
        const products = response.data.map(transformProductData);
        setProductsData(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const transformProductData = (product) => ({
    id: product._id,
    name: product.name,
    brand: product.brand,
    desc: product.desc,
    gender: product.gender,
    sizes: product.type.map(transformSizeData),
    selectedSize: product.type[0],
  });

  const transformSizeData = (size) => ({
    size: size.size,
    img: size.img,
    price: size.price,
    instock: size.instock,
  });
  const handleSizeChange = (selectedSize, productId) => {
    const updatedProducts = productsData.map((product) => {
      if (product.id === productId) {
        const newSelectedSize = product.sizes.find(
          (size) => size.size === parseInt(selectedSize)
        );
        return {
          ...product,
          selectedSize: newSelectedSize || product.selectedSize,
        };
      }
      return product;
    });
    setProductsData(updatedProducts);
  };

  const columns = [
    {
      field: "img",
      headerName: "Image",
      width: 120,
      renderCell: (params) => (
        <img
          src={params.row.selectedSize?.img}
          alt="Product"
          style={{ maxWidth: "100px" }}
        />
      ),
    },
    { field: "name", headerName: "Name", width: 200 },
    { field: "brand", headerName: "Brand", width: 150 },
    { field: "desc", headerName: "Description", flex: 1 },
    { field: "gender", headerName: "Gender", width: 120 },
    {
      field: "instock",
      headerName: "In Stock",
      width: 120,
      valueGetter: (params) => params.row.selectedSize?.instock,
    },
    {
      field: "price",
      headerName: "Price",
      width: 120,
      valueGetter: (params) => params.row.selectedSize?.price,
    },
    {
      field: "size",
      headerName: "Size",
      width: 120,
      renderCell: (params) => (
        <select
          value={params.row.selectedSize?.size}
          onChange={(e) => handleSizeChange(e.target.value, params.row.id)}
        >
          {params.row.sizes.map((size) => (
            <option key={size.size} value={size.size}>
              {size.size}
            </option>
          ))}
        </select>
      ),
    },
  ];

  return (
    <>
      <div className="user relative">
        <div className="info">
          <h2>Products</h2>
          <button
            onClick={() => setOpen(true)}
            className="bg-slate-600 hover:bg-slate-400 p-2 rounded"
          >
            Add New Product
          </button>
        </div>
        <DataTable slug="products" columns={columns} rows={productsData} />
        {open && <Add slug="products" setOpen={setOpen} />}
      </div>
    </>
  );
};

export default Products;
