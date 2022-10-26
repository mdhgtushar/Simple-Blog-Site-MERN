import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:5000/api/",
  headers: {
    "Set-Cookie": "cross-site-cookie=whatever; SameSite=None; Secure",
  },
});
