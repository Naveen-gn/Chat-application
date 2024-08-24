import React, { useState } from "react";
import Chaticon from "../assets/chat.png";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";
import { API_URL } from "../config";

export default function Signin() {
  const [loading, setLoading] = useState(false);
  const {authUser,setAuthUser}=useAuthContext();
  const [inputs, setInputs] = useState({
    name: "",
    username: "",
    password: "",
    gender: "",
  });
  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs,gender });
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputs.name || !inputs.username || !inputs.password || !inputs.gender) {
      toast.error("Please fill all the fields.")
    }
    if (inputs.password.length < 6) {
      toast.error("Password must be atleast 6 characters long.")
    }
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/auth/signup`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(inputs),
      });
      const data = await res.json();
      if(data.error){
        throw new Error(data.error);
      }
      if (res.status === 200) {
        toast.success(data.message);
        setLoading(false);
      }
      if (res.status === 400) {
        toast.error(data.message);
        setLoading(false);
      }
      localStorage.setItem("chat-user", JSON.stringify(data));
      localStorage.setItem("access_token", data.Token);
      setAuthUser(data);
    } catch (error) {
      setLoading(false);
      toast.error("Something went wrong! Please try again.")
    }finally{
      setLoading(false);
    }
  }


  return (
    <div className="Signup w-full h-screen flex flex-wrap justify-center overflow-y-auto">
      <div className="w-full mb-10  md:w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2  flex justify-center items-center flex-col ">
        <div className="">
          <img src={Chaticon} className="w-80 h-72" />
        </div>

        <div className="w-3/4 sm:3/4">
          <h1 className="text-white text-center text-md font-normal">
            You're connecting with friends, family, or colleagues, our platform
            provides a seamless and secure way to stay connected.
          </h1>
        </div>
      </div>

      <div className="w-full  md:w-full lg:mt-10 lg:w-1/2 xl:w-1/2 2xl:w-1/2 flex justify-center items-center  ">
        <div className="w-96 p-12 pt-7 rounded-3xl border border-gray-600 bg-[#0b111f]  mb-20  shadow-2xl shadow-slate-70">
          <h4 className="text-white mb-6 text-center text-lg font-normal">Sign up</h4>
          <div className="flex flex-col gap-6 justify-center  ">
            <form
              className="flex flex-col gap-6 justify-center"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                placeholder="Fullname"
                className="input input-bordered w-full max-w-xs rounded-2xl text-white"
                id="fullname"
                required
                value={inputs.name}
                onChange={(e) =>{setInputs({...inputs, name: e.target.value})}}
              />
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
                  required
                  value={inputs.username}
                  onChange={(e) =>{setInputs({...inputs, username: e.target.value})}}
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
                  required
                  value={inputs.password}
                  onChange={(e) =>{setInputs({...inputs, password: e.target.value})}}
                />
              </label>

              <h1 className="text-white font-normal">Gender</h1>
              <div className="flex  gap-4">
                <div className="flex items-center gap-1">
                  <input
                    type="radio"
                    name="gender"
                    id="male"
                    value="male"
                    required
                    className="radio"
                    checked={inputs.gender==="male"}
                    onChange={() => handleCheckboxChange("male")}
                  />
                  <label
                    htmlFor="male"
                    className="text-sm font-light text-white"
                  >
                    Male
                  </label>
                </div>
                <div className="flex items-center gap-1">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    id="female"
                    required
                    className="radio"
                    checked={inputs.gender==="female"}
                    onChange={() => handleCheckboxChange("female")}
                  />
                  <label
                    htmlFor="female"
                    className="text-sm font-light text-white"
                  >
                    Female
                  </label>
                </div>
              </div>

              <button
                className="btn bg-blue-700 hover:bg-blue-600 rounded-2xl text-black"
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="loading loading-spinner text-white"></span>
                  </>
                ) : (
                  "Sign Up"
                )}
              </button>
            </form>
          </div>

          <h4 className="text-white mt-5 text-md font-normal">
            Already haven an account !{" "}
            <Link
              to="/signin"
              className="text-decoration-none text-blue-600 hover:text-blue-500 text-md font-medium"
            >
              Login
            </Link>
          </h4>
        </div>
      </div>
    </div>
  );
}
