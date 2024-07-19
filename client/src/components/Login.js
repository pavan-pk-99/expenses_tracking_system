import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactLoading from "react-loading";

export default function Login(props) {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError({
      email: "",
      password: "", 
    });

    try {
      console.log("Login payload:", user);
      const res = await fetch("http://localhost:3000/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const data = await res.json();
      setIsLoading(false);

      if (res.ok) {
        console.log("Login successful:", data);
        props.closeModalLogin();
        navigate("/dashboard");
      } else if (data.errors) {
        console.log("Login errors:", data.errors);
        setError(data.errors);
      }
    } catch (error) {
      console.error("An error occurred during login:", error);
      setIsLoading(false);
      setError({ email: "An error occurred", password: "An error occurred" });
    }
  };

  return (
    <div>
      <div className="p-6 bg-rp-black text-white rounded-xl font-lexend">
        <h1 className="font-bold text-2xl">Log In</h1>
        <p>Please log in to your account to manage expenses</p>
        <hr className="my-4" />
        <div className="grid grid-cols-12">
          <label htmlFor="email" className="font-bold flex items-center col-span-4">
            Email
          </label>
          <input
            type="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder="Enter Email"
            className="p-2 m-2 inline-block outline-none col-span-8 bg-jp-black rounded-sm placeholder-rp-white"
          />
          <span className="text-sm text-red-500 col-start-5 col-span-8">
            {error.email}
          </span>
        </div>

        <div className="grid grid-cols-12">
          <label htmlFor="password" className="font-bold flex items-center col-span-4">
            Password
          </label>
          <input
            type="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="Enter Password"
            name="password"
            className="p-2 m-2 inline-block outline-none col-span-8 bg-jp-black rounded-sm placeholder-rp-white"
          />
          <span className="text-sm text-red-500 col-start-5 col-span-8">
            {error.password}
          </span>
        </div>
        <div className="mt-4">
          {isLoading ? (
            <ReactLoading type="bubbles" color="#F5A302" height={50} width={50} />
          ) : (
            <button
              onClick={handleLogin}
              className="font-bold py-3 px-6 rounded-xl border-2 border-rp-white text-rp-white hover:border-rp-black hover:text-rp-black hover:bg-rp-yellow hover:scale-110 transition delay-150 duration-200"
            >
              Login
            </button>
          )}
        </div>
       
      </div>
    </div>
  );
}
