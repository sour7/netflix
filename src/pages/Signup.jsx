import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, signUp } = UserAuth();
  const nevigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      setEmail("");
      setPassword("");
      nevigate("/");
    } catch (e) {
      console.log("errorrrrr", e);
    }
  };

  // console.log(email, password);

  return (
    <>
      <div className="w-full h-screen ">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f669a8f4-de1e-49d7-bb56-c9bd1f4a9069/d4f217b2-4001-4df5-bef8-0b026ec133fe/IN-en-20221031-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen">
          <div className="fixed w-full px-4 py-4 z-50">
            <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white mt-10">
              <div className="max-w-[320px] mx-auto py-16">
                <h1 className="text-3xl font-bold">Sign Up</h1>
                <form
                  onSubmit={handleSubmit}
                  className="w-full flex flex-col gap-4 mt-12"
                >
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    className="p-2 bg-gray-500 rounded outline-none"
                    type="email"
                    placeholder="Email"
                    autoComplete="email"
                  />
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    className="p-2 bg-gray-500 rounded outline-none"
                    type="password"
                    placeholder="password"
                    autoComplete="current-password"
                  />
                  <button className="bg-red-600 p-2 rounded">Sign Up</button>
                  <div className="flex justify-between text-sm text-gray-600">
                    <p>
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        className="mr-[3px]"
                      />
                      Remember Me
                    </p>
                    <p>Need Help?</p>
                  </div>
                  <div className="text-sm ">
                    <span className="text-slate-600">Alredy a member?</span>{" "}
                    <Link to="/login">Sign In</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
