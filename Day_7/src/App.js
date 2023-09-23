import Login from "./Pages/LoginPage";
import Home from "./Pages/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route,Routes } from "react-router-dom";
import Dashboard from "./Pages/AdminDashboard";
import Navbar from "./Components/NavBar";
import UserDashboard from "./Pages/UserDashboard";
import Footer from "./Components/Footer";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<><Navbar/><Footer /></>} >
        <Route index element={<Home />} />
        <Route path="/profile" element={<UserDashboard />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/AdminDashBoard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
