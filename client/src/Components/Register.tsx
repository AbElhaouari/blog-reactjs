import axios from "axios";
import React, { useState } from "react";
import { loggeIN } from "../reused/loggedin";

function Register() {
  const [register, setRegister] = useState({
    email: "",
    firstname: "",
    lastname: "",
    password: "",
  });
  const onRegister = () => {
    axios.post("http://localhost:3001/register", register).then((data) => {
      window.location.href = "/";
    });
  };
  loggeIN();
  return (
    <div className="flex flex-wrap  justify-center ">
      <div className="flex flex-col mt-9 border rounded p-9 shadow-xl">
        <h4 className="mb-9">Register with us</h4>
        <input
          type="text"
          placeholder="Email..."
          className="border rounded mb-6 h-9"
          onChange={(event) =>
            setRegister({ ...register, email: event.target.value })
          }
        />
        <input
          type="text"
          placeholder="First name..."
          className="border rounded mb-6 h-9"
          onChange={(event) =>
            setRegister({ ...register, firstname: event.target.value })
          }
        />
        <input
          type="text"
          placeholder="Last name..."
          className="border rounded mb-6 h-9"
          onChange={(event) =>
            setRegister({ ...register, lastname: event.target.value })
          }
        />
        <input
          type="text"
          placeholder="Password..."
          className="border rounded mb-6 h-9"
          onChange={(event) =>
            setRegister({ ...register, password: event.target.value })
          }
        />
        <button
          className="bg-blue-500 rounded h-10 text-white"
          onClick={onRegister}
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default Register;
