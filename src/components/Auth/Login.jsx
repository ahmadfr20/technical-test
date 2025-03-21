import { useState } from "react";
import { loginUser } from "../../http-common";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa"; // Import icon user & password

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    
    try {
      await loginUser(username, password);
      navigate("/technical-test/dashboard"); // Reload halaman setelah navigasi
    } catch (err) {
      setError("Invalid username or password.");
    }
  };

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-gradient-to-br from-gray-100 to-gray-300">
      <div className="bg-white p-8 rounded-lg shadow-xl w-96">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">Welcome Back</h2>
        {error && <p className="text-red-500 text-sm text-center mb-3">{error}</p>}
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="relative">
            <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
            <input 
              type="text" 
              className="w-full pl-10 p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-black text-lg"
              placeholder="Username"
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              required
            />
          </div>
          <div className="relative">
            <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
            <input 
              type="password" 
              className="w-full pl-10 p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-black text-lg"
              placeholder="Password"
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 text-lg font-semibold transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
