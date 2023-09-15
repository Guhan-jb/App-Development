import Login from "./Pages/LoginPage";
import Home from "./Pages/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route,Router,Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
