export async function createReservation(reservationData) {
  // دابا fake مؤقتاً
  console.log("RESERVATION DATA:", reservationData);

  return {
    id: 1,
    status: "pending",
    total: 7200,
  };
}