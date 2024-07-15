import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Chaticon from "../assets/chat.png";

const baseUrl = "http://localhost:5000/";

export default function Signin() {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  return (
    <div className="Signin w-full h-screen flex flex-wrap justify-center overflow-y-auto ">
      <div className="w-full mb-10  md:w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2  flex justify-center items-center flex-col ">
        <div className="">
          <img src={Chaticon} className="w-80 h-72" />
        </div>

        <div className="w-3/4 sm:3/4">
          <h1 className="text-white text-center">
            You're connecting with friends, family, or colleagues, our platform
            provides a seamless and secure way to stay connected.
          </h1>
        </div>
      </div>

      <div className="w-full  md:w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2 flex justify-center items-center  ">
        <div className="w-96 p-12 pt-7 rounded-3xl border border-gray-600 bg-[#0b111f]    shadow-2xl shadow-slate-70 mb-20">
          <h4 className="text-white mb-6 text-center text-lg font-normal">
            Login
          </h4>
          <div className="flex flex-col gap-6 justify-center ">
            <form className="flex flex-col gap-6 justify-center  ">
              <label className="input input-bordered flex items-center gap-2 rounded-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input
                  type="text"
                  className="grow rounded-2xl"
                  placeholder="Username"
                  id="username"
                  onChange={handleChange}
                />
              </label>
              <label className="input input-bordered flex items-center gap-2 rounded-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  type="password"
                  className="grow rounded-2xl"
                  placeholder="password"
                  id="password"
                  onChange={handleChange}
                />
              </label>

              <button
                className="btn bg-blue-700 hover:bg-blue-600 rounded-2xl text-black"
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="ml-2">Signing in...</span>
                  </>
                ) : (
                  "Login"
                )}
              </button>
            </form>
          </div>
          <h4 className="text-white mt-5 text-md font-normal">
            Don't haven an account !{" "}
            <Link
              to="/signup"
              className="text-decoration-none text-blue-600 hover:text-blue-500 text-md font-medium"
            >
              Signup
            </Link>
          </h4>

          {errorMessage && (
            <h3 className="mt-5 text-red-600">{errorMessage}</h3>
          )}
        </div>
      </div>
    </div>
  );
}
