import React from "react";

function Login() {
  return (
    <div className="flex flex-wrap justify-center mt-6">
      <div className="flex flex-col border rounded shadow-xl p-10">
        <h4 className="mb-9">Login with an account</h4>
        <input
          type="text"
          placeholder="Email"
          className=" border mb-9 w-full h-9 rounded"
        />
        <input
          type="text"
          placeholder="Password"
          className=" border mr-9 w-full  h-9 rounded"
        />
        <button className="bg-blue-500 rounded mt-4 w-full h-10 text-white">
          Login{" "}
        </button>
      </div>
    </div>
  );
}

export default Login;
