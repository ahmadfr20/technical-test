import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Auth/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import Homepage from "./components/Homepage/Homepage";
import AboutMe from "./components/AboutMe/AboutMe";

import ProtectedRoute from "./ProtectedRoute";



function App() {
  return (
    <div class="w-screen h-screen font-blueberrymd bg-white">
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/me" element={<AboutMe />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>

    </div>

  );
}

export default App;
