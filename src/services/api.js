import axios from "axios";

const swapiURL = axios.create({
  baseURL: "https://swapi.co/api/",
  timeout: 1000
});

export default swapiURL;
