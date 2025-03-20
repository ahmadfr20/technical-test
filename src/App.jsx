import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Auth/Login";
import Homepage from "./components/Homepage/Homepage";



function App() {
  return (
    <div class="w-full">
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/homepage" element={<Homepage />} />
      </Routes>

    </div>

  );
}

export default App;
