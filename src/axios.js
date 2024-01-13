import axios from "axios";

// baseurl to make requests to movie Db
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
