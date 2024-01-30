import React, { useState, useEffect } from "react";
import "./Add.scss";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { storage } from "../../firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

const Add = ({ slug, columns, setOpen }) => {
  const [uploadImg, setUploadImg] = useState(null);

  const queryClient = useQueryClient();

  // const mutation = useMutation({
  //   mutationFn: () => {
  //     return fetch(`http://localhost:8800/api/${slug}`, {
  //       method: "post",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },

  //       body: JSON.stringify({
  //         id: 111,
  //         img: "",
  //         status : true,
  //         lastName: "Hello",
  //         firstName: "Test",
  //         email: "testme@gmail.com",
  //         createdAt: "3.4.2023",

  //       }),
  //     });
  //   },
  //   onSuccess: () => {
  //     queryClient.invalidateQueries([`all${slug}`]);
  //   },
  // });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const uploadImage = () => {
    if (uploadImg === null) return;

    const imageRef = ref(storage, `images/${uploadImg.name + v4()}`);

    uploadBytes(imageRef, uploadImg).then(() => {
      alert("Image Uploaded!!!");
    });
  };

  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={() => setOpen(false)}>
          X
        </span>
        <h1>Add New {slug}</h1>
        <form onSubmit={handleSubmit}>
          {columns
            .filter((item) => item.field !== "id")
            .map((column) => (
              <div className="item">
                <label>{column.headerName}</label>
                {column.field === "img" && (
                  <>
                    <input
                      type="file"
                      onChange={(event) => setUploadImg(event.target.files[0])}
                    />
                    <button onClick={uploadImage}>Upload Image</button>
                  </>
                )}
                <input type={column.type} placeholder={column.field} />
              </div>
            ))}
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Add;
