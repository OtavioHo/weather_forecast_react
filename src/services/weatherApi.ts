import axios from "axios";

const weatherApi = axios.create({ baseURL: "http://localhost:3333" });

export default weatherApi;
