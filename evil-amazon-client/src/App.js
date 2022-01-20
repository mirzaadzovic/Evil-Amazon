import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Checkout from "./components/checkout/Checkout";
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
