import Slider from './client/Slider.js';
import './App.css';
import ResponsiveAppBar from "./client/ResponsiveAppBar.js";
import ContactUs from './client/ContactUs.js';
import LoginForm from './client/Login.js';
import { Routes, Route } from 'react-router';
import Chat from './client/chat.js';
import FormPage from './client/contact.js';
import React from "react";

import WrapStepper from "./client/money transfer/WrapStepper"


/*
<FormPage/> not work

      <ResponsiveAppBar></ResponsiveAppBar>
      <Routes>
      <Route path="/" element={<Slider/>}/>
        <Route path="/Home" element={<Slider/>}/>
        <Route path="/Contact us" element={<ContactUs/>}/>
        <Route path="/Login" element={<LoginForm/>}/>
      </Routes>
*/
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ResponsiveAppBar></ResponsiveAppBar>
        <Routes>
        <Route path="/" element={<Slider/>}/>
          <Route path="/Home" element={<Slider/>}/>
          <Route path="/Contact us" element={<ContactUs/>}/>
          <Route path="/Login" element={<LoginForm/>}/>
        </Routes>
      </header>
    </div>
  );
}




export default App;