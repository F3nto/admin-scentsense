import React, { useState } from "react";
import "./Add.scss";
import { storage } from "../../firebase";
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const Add = ({ slug, setOpen }) => {
  const [productData, setProductData] = useState({
    name: "",
    brand: "",
    desc: "",
    gender: "",
    type: [],
  });
  const [uploadImg, setUploadImg] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [typeData, setTypeData] = useState({
    price: "",
    size: "",
    instock: "",
  });

  const uploadImage = () => {
    if (uploadImg === null) return;

    const imageRef = ref(storage, `images/${uploadImg.name + v4()}`);
    uploadBytes(imageRef, uploadImg).then(async (snapshot) => {
      const url = await snapshot.ref.getDownloadURL();
      setImageUrl(url);
      alert("Image Uploaded!!!");

      const updatedProductData = {
        ...productData,
        imageUrl: url,
        type: [typeData],
      };
      setProductData(updatedProductData);

      try {
        await mutation.mutateAsync(updatedProductData);
        alert("Product added successfully!");

        // Reset form fields
        setProductData({
          name: "",
          brand: "",
          desc: "",
          gender: "",
          type: [],
        });
        setTypeData({
          img: imageUrl,
          price: "",
          size: "",
          instock: "",
        });
      } catch (error) {
        console.error("Error adding product:", error);
        alert("Error adding product. Please try again later.");
      }
    });
  };

  const mutation = useMutation({
    mutationFn: (productData) => {
      return axios.post(
        `http://localhost:4000/api/v1/all-products`,
        productData
      );
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    uploadImage();

    const updatedProductData = { ...productData, type: [typeData] };
    setProductData(updatedProductData);

    try {
      await mutation.mutateAsync(productData);
      alert("Product added successfully!");

      setProductData({
        name: "",
        brand: "",
        desc: "",
        gender: "",
        type: [],
      });
      setTypeData({
        img: imageUrl,
        price: "",
        size: "",
        instock: "",
      });
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Error adding product. Please try again later.");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleTypeInputChange = (e) => {
    const { name, value } = e.target;
    setTypeData({ ...typeData, [name]: value });
  };

  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={() => setOpen(false)}>
          X
        </span>
        <h1>Add New {slug}</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center items-center mb-3">
            <div>Upload Image</div>
            <div className="ml-4">
              <input
                type="file"
                className="border p-2"
                onChange={(event) => setUploadImg(event.target.files[0])}
              />
            </div>
          </div>
          {imageUrl && (
            <div className="uploaded-image">
              <img src={imageUrl} alt="Uploaded" />
            </div>
          )}
          <div className="item">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={productData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="item">
            <label>Brand</label>
            <input
              type="text"
              name="brand"
              value={productData.brand}
              onChange={handleInputChange}
            />
          </div>
          <div className="item">
            <label>Description</label>
            <textarea
              name="desc"
              className="bg-slate-600 w-80"
              value={productData.desc}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div className="item">
            <label>Gender</label>
            <select
              name="gender"
              className="bg-black"
              value={productData.gender}
              onChange={handleInputChange}
            >
              <option value="">Select Gender</option>
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Unisex">Unisex</option>
            </select>
          </div>

          <div className="item">
            <label>Price</label>
            <input
              type="number"
              name="price"
              value={typeData.price}
              onChange={handleTypeInputChange}
            />
          </div>
          <div className="item">
            <label>Size</label>
            <input
              type="number"
              name="size"
              value={typeData.size}
              onChange={handleTypeInputChange}
            />
          </div>
          <div className="item">
            <label>In Stock</label>
            <input
              type="number"
              name="instock"
              value={typeData.instock}
              onChange={handleTypeInputChange}
            />
          </div>
          <button className="bg-slate-600 px-2 py-2 hover:bg-slate-400">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Add;
