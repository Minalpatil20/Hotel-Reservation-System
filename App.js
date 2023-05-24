import React from 'react';
import { toast } from 'react-toastify';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  } from "react-router-dom";
import './App.css';
import Home from './Components/Home';
import RoomBooking from './Components/RoomBooking';
import Meetings_Events from './Components/Meetings_Events';
import Services from './Components/Services';
import Contactus from './Components/Contactus';
import Menus from './Components/Menus';

function App() {
  const btnHandle=()=>{
    toast.success("done",{ 
      position:"top-center",
    });
  };
  return (
    <>
    <switch>
            <Router>
              <Routes>
                <Route path="/" element={<Home />} exact/>
                <Route path="/Room-Booking" element={<RoomBooking />} exact/>
                <Route path="/Meetings-Events" element={<Meetings_Events />} exact/>
                <Route path="/Services" element={<Services />} exact/>
                <Route path="/Contactus" element={<Contactus />} exact/>
                <Route path="/Menus" element={<Menus />} exact/>
              </Routes>
            </Router>         
    </switch>
    </>
  );
}
export default App;
