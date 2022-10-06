import axios from "axios";

export const loggeIN = () => {
  axios.get("http://localhost:3001/login").then((data) => {
    if (data.data.logged) {
      window.location.href = "/";
    }
  });
};
