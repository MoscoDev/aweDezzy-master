import React from "react";
import "./App.css";
import Home from "./pages/index";
import Faq from "./pages/Faq";
import Login from "./pages/Login";
import Signup from "./pages/Signup.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Todo from "./pages/Todo";
import Tagrender from "./pages/Tagrender";
import Bank from "./Bank";

const App = () => (
  <div className="App">
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/faq" exact element={<Faq />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/Todo" exact element={<Todo />} />
        <Route path="/Bank" exact element={<Bank />} />
        <Route path="/Tagrender" exact element={<Tagrender />} />
      </Routes>
      <Footer />
      {/* <Formss /> */}
    </Router>
  </div>
);

export default App;
