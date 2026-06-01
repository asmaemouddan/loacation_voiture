import api from "../api/axios";

export const getVehicles = async () => {
  const response = await api.get("/vehicules");
  return response.data;
};

export const getVehicleById = async (id) => {
  const response = await api.get(`/vehicules/${id}`);
  return response.data;
};