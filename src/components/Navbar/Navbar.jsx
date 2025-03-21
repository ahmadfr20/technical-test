import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo/logo.png";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const transaction = localStorage.getItem("transaction");
    setIsLoggedIn(!!transaction);
  }, []);

  const handleAuthAction = () => {
    if (isLoggedIn) {
      localStorage.removeItem("transaction");
      setIsLoggedIn(false);
      navigate("/technical-test/login");
    } else {
      navigate("/technical-test/login");
    }
  };

  return (
    <div className="container fixed max-w-full backdrop-blur-md bg-white z-10 px-4 py-5 bg-opacity-80 mx-auto shadow-sm">
      <div className="xl:mx-28 lg:mx-20 md:mx-auto flex justify-between">
        <a onClick={()=>navigate("/technical-test")} aria-label="PT X" title="PT X" className="inline-flex items-center">
          <img src={logo} className="mr-3 h-8 rounded-full" alt="Logo" />
          <span className="ml-2 text-2xl font-blueberry tracking-wide text-gray-800">PT X</span>
        </a>
        <ul className="relative flex items-center max-w-full justify-end hidden min-w-xs space-x-7 sm:flex">
          <li>
            <button
              onClick={handleAuthAction}
              className="inline-flex items-center bg-gray-800 justify-center h-12 px-6 font-blueberry tracking-wide text-white transition duration-200 rounded-lg shadow-md hover:bg-gray-600 focus:shadow-outline focus:outline-none"
            >
              {isLoggedIn ? "Logout" : "Login"}
            </button>
          </li>
        </ul>
        <div className="sm:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-gray-200"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path fill="currentColor" d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z" />
              <path fill="currentColor" d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z" />
              <path fill="currentColor" d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z" />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full">
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <a href="/technical-test/" aria-label="Company" title="Company" className="inline-flex items-center">
                      <img src={logo} className="mr-3 h-8 rounded-full" alt="Logo" />
                      <span className="ml-2 text-xl font-blueberry tracking-wide text-gray-800">PT X</span>
                    </a>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <button
                        onClick={handleAuthAction}
                        className="inline-flex items-center justify-center w-full h-12 px-6 font-blueberry tracking-wide text-white transition duration-200 rounded shadow-md bg-green-500 focus:shadow-outline focus:outline-none"
                      >
                        {isLoggedIn ? "Logout" : "Login"}
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
