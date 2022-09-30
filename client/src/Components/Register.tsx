import React from "react";

function Register() {
  return (
    <div className="flex flex-wrap  justify-center ">
      <div className="flex flex-col mt-9 border rounded p-9 shadow-xl">
        <h4 className="mb-9">Register with us</h4>
        <input
          type="text"
          placeholder="Email..."
          className="border rounded mb-6 h-9"
        />
        <input
          type="text"
          placeholder="First name..."
          className="border rounded mb-6 h-9"
        />
        <input
          type="text"
          placeholder="Last name..."
          className="border rounded mb-6 h-9"
        />
        <input
          type="text"
          placeholder="Password..."
          className="border rounded mb-6 h-9"
        />
        <button className="bg-blue-500 rounded h-10 text-white">
          Register
        </button>
      </div>
    </div>
  );
}

export default Register;
