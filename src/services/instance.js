import axios from "axios";

const instance = axios.create({
    baseURL: "https://backend-feudo-roxo.herokuapp.com/"
});
export default instance