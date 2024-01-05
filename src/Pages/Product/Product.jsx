import React from "react";
import Single from "../../Components/Single/Single";
import "./Product.scss";
import { singleProduct } from "../../data";

const Product = () => {
  //! fetch data and send to single component

  return (
    <div>
      <Single data = {singleProduct} />
    </div>
  );
};

export default Product;
