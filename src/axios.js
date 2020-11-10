import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-arturolatorre--clone.cloudfunctions.net/api", // The API Cloud Function
});

export default instance;
