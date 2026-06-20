import axios from "axios";

// ✅ IMPORTANT: Your backend is running on 8086, NOT 8080!
const API = axios.create({
    baseURL: "http://localhost:8086",
    headers: {
        "Content-Type": "application/json",
    },
});

export default API;