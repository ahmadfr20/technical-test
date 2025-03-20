import axios from "axios";

const API_URL = "https://login-bir3msoyja-et.a.run.app"; // Ganti dengan URL API Anda

export const loginUser = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}`, { username, password });
    localStorage.setItem("transaction", JSON.stringify(response.data.data)); // Simpan transaksi
    return response.data;
  } catch (error) {
    throw error.response?.data || "Terjadi kesalahan saat login.";
  }
};