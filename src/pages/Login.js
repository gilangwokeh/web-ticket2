import React, { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import Swal from 'sweetalert2';
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import qs from "qs";
function LoginPage({ onLogin }) {
  const [username, setUsername] = useState("");
  const [navigate, setNavigate] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleLogin = () => {
    localStorage.setItem("isAuthenticated", "true");
    onLogin();
  };


  const handleFailture2 = () => {
    Swal.fire({
      title: 'FAILTURE!',
      text: 'SALAH PASSWORD ADA USERNAME',
      icon: 'error',
      confirmButtonText: 'Okay'
    });
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleSuccess = () => {
    Swal.fire({
      title: 'SUCCESS!',
      text: 'Login Berhasil',
      icon: 'success',
      confirmButtonText: 'Okay'
    });
  };

  const form = qs.stringify({
    model: `${process.env.REACT_APP_REST_API_MODEL_USERS}`,
    url: `${process.env.REACT_APP_API_URL}`,
    db: `${process.env.REACT_APP_API_DB}`,
    username,
    password,
  });
  let apiKey = `${process.env.REACT_APP_API_LOGIN}`;
  let config = {
    method: "POST",
    maxBodyLength: Infinity,
    url: apiKey,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: form,
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .request(config)
      .then((response) => {
        if (response) {
          setNavigate(true)
          handleLogin();
          handleSuccess();
          // localStorage.setItem("model", `${process.env.REACT_APP_REST_API_MODEL_USERS}`);
          // localStorage.setItem("url", `${process.env.REACT_APP_API_URL}`);
          // localStorage.setItem("db", `${process.env.REACT_APP_API_DB}`);
          // localStorage.setItem("username", username);
          // localStorage.setItem("password", password);
          // localStorage.setItem("data", `${process.env.REACT_APP_API_LOGIN}`);
        }
      })
      .catch((error) => {
        console.error(error);
        handleFailture2();
      });
  };

  return (
    <>
      {navigate && <Navigate to="/dashboardAdmin" />}
      <div className=" min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full">
          <div>
            <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
              SIGN IN
            </h2>
          </div>
          <form className="mt-8" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm">
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2 mt-2 ml-2"
                  htmlFor="username"
                >
                  USERNAME
                </label>
                <input
                  aria-label="Username"
                  name="username"
                  type="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="-mt-px">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2 mt-2 ml-2"
                  htmlFor="password"
                >
                  PASSWORD
                </label>
                <div className="flex items-center border rounded">
                  <input
                    aria-label="Password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    className="border-l px-4"
                    onClick={toggleShowPassword}
                  >
                    {showPassword ? <RiEyeFill /> : <RiEyeOffFill />}
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
