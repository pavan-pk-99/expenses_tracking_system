import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Vector from "../assets/mainimg.png";
import Menu from "../assets/mobile_bar.png";
import Close from "../assets/close.png";

export default function LandingPage(props) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const res = await fetch("user/logout");
    props.setIsLoggedIn(false);
    navigate("/");
  };

  useEffect(() => {
    const checklogin = async () => {
      const res = await fetch("/user/auth");
      const data = await res.json();
      console.log(data);
      if (data.msg === "Login to Proceed") {
        props.setIsLoggedIn(false);
      } else {
        props.setIsLoggedIn(true);
      }
    };
    checklogin();
  }, []);

  const [isMobile, setIsMobile] = useState(true);

  return (
    <div
      className="w-screen h-screen lg:px-24 px-8 flex flex-col"
      style={{ backgroundColor: '#197278' }} // Primary color
    >
      <nav className="nav-mobile lg:hidden">
        <div
          className="pt-4 lg:flex lg:py-5 items-center lg:text-xl text-sm lg:justify-between justify-start"
          id="navbar"
        >
          <div className="flex">
            <h1 className="text-3xl font-semibold pt-4" style={{ color: 'black' }}>
              Expense Tracker
            </h1>
            <button
              className="ml-auto mt-4 bg-black rounded-md" // Changed color
              onClick={() => setIsMobile(!isMobile)}
            >
              {isMobile ? (
                <img src={Menu} className="h-10 w-10 p-2" alt="Menu" />
              ) : (
                <img src={Close} className="h-10 w-10 p-3" alt="Close" />
              )}
            </button>
          </div>
          <div
            onClick={() => setIsMobile(true)}
            className={
              isMobile
                ? "text-black hidden" // Changed color
                : "text-black grid grid-rows-3 w-fit ml-24 text-center text-xl" // Changed color
            }
          >
            <Link to="/about-us">
              <div className="lg:px-4 px-1 py-4 cursor-pointer hover:bg-black hover:rounded-md mx-2"> {/* Changed color */}
                <h1>About Us</h1>
              </div>
            </Link>
            <div
              onClick={props.openModalContact}
              className="lg:px-4 px-1 py-4 cursor-pointer hover:bg-black hover:rounded-md ml-2 mr-4" // Changed color
            >
              <h1>Contact Us</h1>
            </div>

            {props.isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="bg-black text-white px-3 py-1 rounded-md font-semibold hover:scale-110 duration-200 ease-in-out" // Changed color
              >
                Logout
              </button>
            ) : (
              <button
                onClick={props.openModalLogin}
                className="bg-black text-white px-3 py-1 rounded-md font-semibold hover:scale-110 duration-200 ease-in-out" // Changed color
              >
                Login
              </button>
            )}
          </div>
        </div>
      </nav>
      <div
        className="nav-desktop hidden lg:flex lg:py-5 items-center lg:text-xl text-sm lg:justify-between justify-start border-b-2 border-white"
        id="navbar"
      >
        <h1 className="text-white lg:text-4xl font-semibold text-xl"> {/* Changed color */}
          TrackTreasury
        </h1>
        <div className="grid grid-cols-3 lg:flex items-center lg:justify-between text-black"> {/* Changed color */}
          <Link to="/about-us">
            <div className="lg:px-4 px-1 py-4 cursor-pointer hover:bg-white hover:rounded-md mx-2"> {/* Changed color */}
              <h1>About Us</h1>
            </div>
          </Link>
          <div
            onClick={props.openModalContact}
            className="lg:px-4 px-1 py-4 cursor-pointer hover:bg-white hover:rounded-md ml-2 mr-4" // Changed color
          >
            <h1>Contact Us</h1>
          </div>

          {props.isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-black text-white px-3 py-1 rounded-md font-semibold hover:scale-110 duration-200 ease-in-out" // Changed color
            >
              Logout
            </button>
          ) : (
            <button
            onClick={props.openModalSignup}
            className="bg-black text-white px-3 py-1 rounded-md font-semibold hover:scale-110 duration-200 ease-in-out" // Changed color
          >
            Register
          </button>
            
            
            
          )}
          
        </div>
      </div>
      <div className="lg:grid lg:grid-cols-2 text-slate-300 lg:h-5/6 mt-32 lg:mt-0 flex-grow">
        <div className="my-auto">
          <div className="lg:text-6xl lg:py-3 text-2xl p-1">
            "The Expense Tracker that simplifies your financial journey."
          </div>
          <div className="lg:text-2xl py-2 text-xl mt-4">
          Track every expense, save more, and see your money grow
          </div>
          {props.isLoggedIn ? (
            <button
              onClick={() => {
                navigate("/dashboard");
              }}
              className="bg-black text-white px-4 py-2 rounded-md font-semibold flex items-center w-fit my-2" // Changed color
            >
              Dashboard
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="pl-1 w-8"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          ) : (
            <button
              onClick={props.openModalSignup}
              className="mt-8 bg-black text-white px-4 py-2 rounded-md font-semibold flex items-center w-fit my-2" // Changed color
            >
              Get Started
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="pl-1 w-8"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          )}
        </div>
        <div className="my-auto mt-20 w-full">
          <img src={Vector} alt="join now" />
        </div>
      </div>
    </div>
  );
}
