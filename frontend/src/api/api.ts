import axios from "axios";

export const api = axios.create({
  baseURL: "https://xyz-backend-ow16.onrender.com",

});

api.interceptors.request.use(config => {
  const auth = localStorage.getItem("auth");
  if (auth) {
    const { token } = JSON.parse(auth);
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});