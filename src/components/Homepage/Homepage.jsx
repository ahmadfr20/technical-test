import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import manajemen from "../../assets/management.png";
import logo from "../../assets/logo/logo.png";

const Homepage = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();
  
    useEffect(() => {
      const transaction = localStorage.getItem("transaction");
      setIsLoggedIn(!!transaction);
    }, []);
  
    const handleAuthAction = () => {
      if (isLoggedIn) {
        navigate("/technical-test/dashboard");
      } else {
        navigate("/technical-test/login");
      }
    };

  return (
    <div className="bg-white h-screen flex flex-col justify-between">
      <section className="container mx-auto mt-28 flex flex-col lg:flex-row items-center px-6 lg:px-20 py-8 lg:py-12">
        <div className="lg:w-1/2 w-full text-center lg:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-black leading-tight break-words mb-4">
            PT X Finance Management System
          </h1>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-6">
            Selamat datang di Finance Management System, aplikasi ini digunakan untuk memenuhi kebutuhan manajemen finansial pada PT X.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
          <button
            onClick={handleAuthAction}
            className="inline-flex items-center justify-center xl:w-sm sm:w-xs h-12 px-6 font-blueberry tracking-wide text-white transition duration-200 rounded shadow-md bg-black hover:bg-gray-700 focus:shadow-outline focus:outline-none"
            >
            {isLoggedIn ? "Ke Dashboard" : "Get Started"}
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 hidden sm:block">
          <img src={manajemen} alt="Mockup" className="w-full max-w-xs sm:max-w-md" />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-3">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between px-6 lg:px-20">
          <a onClick={()=>navigate("/technical-test")} className="flex items-center space-x-3">
            <img src={logo} className="h-8" alt="Logo" />
            <span className="text-lg font-semibold text-gray-800">PT X</span>
          </a>
          <ul className="flex flex-wrap justify-center sm:justify-end space-x-3 text-gray-600 text-sm mt-3 sm:mt-0">
            <li><a onClick={()=>navigate("/technical-test/me")} className="hover:underline text-black">About Me</a></li>
          </ul>
        </div>
        <div className="text-center text-gray-500 text-xs sm:text-sm mt-2">
          © 2025 Ahmad Fathoni R. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
