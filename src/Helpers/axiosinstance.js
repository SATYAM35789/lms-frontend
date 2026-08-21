import axios from "axios";

const BASE_URL = "http://localhost:5014/api/v1";

const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = BASE_URL
axiosInstance.defaults.withCredentials = true;

// And there is more such property of axios instance defaults (google search) (config defaults)
//  timeout axios :- So ham yaha ye set kar denge agar request is time ke ander nahi aayega then request ko abort kardo

export default axiosInstance;