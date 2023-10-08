import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Details from "./pages/Details/Details";
import CreateDish from "./pages/CreateDish/CreateDish";
import EditDish from "./pages/EditDish/EditDish"
import Footer from "./components/Footer/Footer";


const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="/createdish" element={<CreateDish />} />
        <Route path="/editdish" element={<EditDish />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
