import React from "react";
import Single from "../../Components/Single/Single";
import { singleUser } from "../../data";

const User = () => {
  //! fetch data and send to single component

  return (
    <div>
      <Single data = {singleUser} />
    </div>
  );
};

export default User;
