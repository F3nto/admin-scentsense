import React from "react";
import "./Add.scss";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const Add = ({ slug, columns, setOpen }) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: () => {
      return fetch(`http://localhost:8800/api/${slug}`, {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          id: 111,
          img: "",
          status : true,
          lastName: "Hello",
          firstName: "Test",
          email: "testme@gmail.com",
          createdAt: "3.4.2023",
          
        }),
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries([`all${slug}`]);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate();
    setOpen(false);
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
            .filter((item) => item.field !== "id" && item.field !== "img")
            .map((column) => (
              <div className="item">
                <label>{column.headerName}</label>
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
