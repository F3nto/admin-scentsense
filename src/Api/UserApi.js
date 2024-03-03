import axios from "axios";

const userDataApi = axios.create({
  baseURL: "http://localhost:4000/api/v1/users",
});

export const getUserData = async () => {
  const response = await userDataApi.get("/");
  return response.data;
};
