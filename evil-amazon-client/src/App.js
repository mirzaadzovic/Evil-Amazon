import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Checkout from "./components/checkout/Checkout";
import Login from "./components/login/Login";
import Register from "./components/register/Register";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
