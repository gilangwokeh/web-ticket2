import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardAdmin from "./pages/DashboardAdmin";
import DaftarListTicket from "./pages/DaftarListTicket";
import Login from "./pages/Login";
import CreateUser from "./pages/CreateUser";
import DaftarListUser from "./pages/DaftarListUser";
import Message from "./pages/Messange";
import Contact from "./pages/Contact";
import "../src/App.css";
import Profil from "./pages/Profil";
import Text from "./pages/Text";
import Navbar from "./component/login/Navbar";
import Sidebars from "./component/Sidebar";
const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );
  
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };
  return (
    <div>
      <Router>
      {isAuthenticated ? <Sidebars onLogout={handleLogout} /> : <Navbar />}
        <Routes>
          <Route path="/" element={<Login onLogin={handleLogin} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/dashboardAdmin" element={<DashboardAdmin />} />
          <Route path="/message" element={<Message />} />
          <Route path="/createuser" element={<CreateUser />} />
          <Route path="/daftarListTicket" element={<DaftarListTicket />} />
          <Route path="/daftarListUser" element={<DaftarListUser />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
