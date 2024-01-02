import React, {useState} from "react";
import DataTable from "../../Components/DataTable/DataTable";
import { userRows } from "../../data";
import Add from "../../Components/Add/Add";
import "./Users.scss"

const dataGridColumns = [
  {
    field: "Image",
    headerName: "Avator",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "https://shorturl.at/xFH29"} alt="" />;
    },
  },
  // {
  //   field: "actions",
  //   headerName: "Actions",
  //   width: 100,
  //   renderCell: (params) => {
  //     return (
  //       <div className="action">
  //         <Link to={`/${slug}/${params.row.id} `} className="view">
  //           <Pageview />
  //         </Link>
  //         <div className="delete" onClick={() => handleDelete(params.row.id)}>
  //           <Delete />
  //         </div>
  //       </div>
  //     );
  //   },
  // },
  {
    field: "status",
    headerName: "Status",
    width: 100,
    type: "boolean",
  },
  { field: "firstName", headerName: "First Name", width: 150, type : "string" },
  { field: "lastName", headerName: "Last Name", width: 150, type : "string" },
  {
    field: "fullName",
    headerName: "Full Name",
    width: 150,
   
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    type : "string"
  },

  { field: "email", headerName: "Email", width: 200, type : "string" },
  { field: "isActive", headerName: "Active", width: 100, type : "string" },
];
const Users = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
    <div className="user">
      <div className="info">
        <h2>Users</h2>
        <button onClick={() => setOpen(true)}>Add New User</button>
      </div>

      <DataTable slug="users" columns={dataGridColumns} rows = {userRows} />
    </div>
    {open && <Add slug = "users" columns = {dataGridColumns} setOpen = {setOpen} /> }
    </>
  );
};

export default Users;
