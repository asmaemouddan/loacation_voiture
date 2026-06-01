import api from "../api/axios";

export const getReservations = async () => {
  const response = await api.get("/reservations");
  return response.data;
};

export const getReservationById = async (id) => {
  const response = await api.get(`/reservations/${id}`);
  return response.data;
};

export const createReservation = async (reservationData) => {
  const response = await api.post("/reservations", reservationData);
  return response.data;
};