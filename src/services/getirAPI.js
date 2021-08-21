import axios from "axios";

const getirAPI = axios.create({
  baseURL: "http://localhost:3001",
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
});

export default getirAPI;
