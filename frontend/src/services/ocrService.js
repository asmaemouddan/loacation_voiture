import api from "../api/axios";

export const scanDocument = async (file) => {
  const formData = new FormData();

  formData.append("image", file);

  const response = await api.post("/ocr/scan", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

export const saveOcrResult = (result) => {
  localStorage.setItem("ocr_result", JSON.stringify(result));
};

export const getOcrResult = () => {
  const result = localStorage.getItem("ocr_result");

  return result ? JSON.parse(result) : null;
};

export const clearOcrResult = () => {
  localStorage.removeItem("ocr_result");
};

export const setOcrVerified = (userId) => {
  localStorage.setItem("ocr_verified", "true");
  localStorage.setItem("ocr_verified_user_id", userId);
};

export const isOcrVerified = (userId) => {
  return (
    localStorage.getItem("ocr_verified") === "true" &&
    localStorage.getItem("ocr_verified_user_id") === String(userId)
  );
};

export const clearOcrVerification = () => {
  localStorage.removeItem("ocr_verified");
  localStorage.removeItem("ocr_verified_user_id");
};