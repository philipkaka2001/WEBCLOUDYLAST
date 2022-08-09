import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./page/Login/Login";
import Register from "./page/Register/Register";
import Home from './page/Home/Home';
import "react-toastify/dist/ReactToastify.css";
import Contact from './components/Contact/Contact';
import Download from './components/Posts/Posts';
import FormPost from './page/FormPost/FormPost';

export default function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/upload" element={<FormPost/>} />
        <Route exact path="/download" element={<Download/>} />
        {/* <Route exact path="/post" element={<Post/>} /> */}
        
      </Routes>
    </BrowserRouter>
  )
}