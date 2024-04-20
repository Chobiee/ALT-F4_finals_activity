import axios from "axios";
export default axios.create({
    baseURL: "http://localhost/ALT-F4_datsys/ALT-F4_app/public/api",
    headers:{
        "Content-type": "application/json",
    },
});