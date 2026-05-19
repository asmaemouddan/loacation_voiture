import axios from "axios";

const api = axios.create({
  baseURL: "http://10.223.147.158:8000/api/vehicles",
});

export default api;