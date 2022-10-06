import React, { useState } from "react";
import axios from "axios";
import { loggeIN } from "../reused/loggedin";
import { useNavigate } from "react-router-dom";
function Login() {
  axios.defaults.withCredentials = true;
  const [login, setLogin] = useState({ email: "", password: "" });

  const onLogin = async () => {
    await axios.post("http://localhost:3001/login", login).then((data) => {
      console.log(data.data);
      window.location.href = "/";
    });
  };
  const nav = useNavigate();
  axios.get("http://localhost:3001/login").then((data) => {
    if (data.data.logged) {
      nav(-1);
    }
  });
  return (
    <div className="flex flex-wrap justify-center mt-6">
      <div className="flex flex-col border rounded shadow-xl p-10">
        <h4 className="mb-9">Login with an account</h4>
        <input
          type="text"
          placeholder="Email"
          className=" border mb-9 w-full h-9 rounded"
          onChange={(event) =>
            setLogin({ ...login, email: event.target.value })
          }
        />
        <input
          type="text"
          placeholder="Password"
          className=" border mr-9 w-full  h-9 rounded"
          onChange={(event) =>
            setLogin({ ...login, password: event.target.value })
          }
        />
        <button
          className="bg-blue-500 rounded mt-4 w-full h-10 text-white"
          onClick={onLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
