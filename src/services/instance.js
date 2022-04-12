import axios from "axios";
import react from "react";

const instance = axios.create({
    baseURL: "https://backend-feudo-roxo.herokuapp.com/"
});
export default instance