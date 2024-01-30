import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import "./DataTable.scss";
import { Link } from "react-router-dom";
import { Pageview, Delete } from "@mui/icons-material";
import { useQueryClient, useMutation } from "@tanstack/react-query";

const DataTable = ({ columns, rows, slug }) => {
  const queryClient = useQueryClient();

  // const mutation = useMutation({
  //   mutationFn: (id) => {
  //     return fetch(`http://localhost:4000/api/v1/all-products`, {
  //       method: "delete",
  //     });
  //   },
  //   onSuccess: () => {
  //     queryClient.invalidateQueries([`all${slug}`]);
  //   },
  // });

  // const handleDelete = (id) => {
  //   mutation.mutate(id);
  // };

  // const userAction = {
  //   field: "actions",
  //   headerName: "Actions",
  //   width: 100,
  //   renderCell: (params) => {
  //     console.log("params...", params);

  //     return (
  //       <div className="action">
  //         <Link className="view">
  //           <Pageview />
  //         </Link>
  //         <div className="delete" >
  //           <Delete />
  //         </div>
  //       </div>
  //     );
  //   },
  // };

  return (
    <div className="dataTable">
      <DataGrid
        className="dataGrid"
        rows={rows}
        columns={[...columns]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  );
};

export default DataTable;
