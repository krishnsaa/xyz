import axios from "axios";

export const api = axios.create({
  // baseURL: "https://xyz-backend-eki2.onrender.com",
  baseURL: "http://localhost:3000",

});

api.interceptors.request.use(config => {
  const auth = localStorage.getItem("auth");
  if (auth) {
    const { token } = JSON.parse(auth);
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});