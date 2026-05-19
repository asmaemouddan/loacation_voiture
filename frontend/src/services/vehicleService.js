import api from "../api/axios";

export async function getVehicles() {
  const response = await api.get("/vehicles");
  return response.data;
}