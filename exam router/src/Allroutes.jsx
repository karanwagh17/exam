import React from "react";
import { Route, Routes } from "react-router";
import Home from "./Components/Home";
import Productlisting from "./Components/Productlisting";
import Login from "./Components/Login";
import About from "./Components/About";
import Private from "./Components/Private";
// import Cart from "./Components/Cart";
import Productdetails from "./Components/Productdetails";
import Edit from "./Components/Edit";
import Addtocart from "./Components/Addtocart";

const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Aboute" element={<About />}></Route>
        <Route path="/Addtocart" element={<Addtocart />}></Route>

        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/producliting"
          element={
            <Private>
              <Productlisting />
            </Private>
          }
        ></Route>

        <Route path="/" element={<Home />}></Route>
        {/* <Route path="/cart/:id" element={<Cart/>}></Route> */}
        <Route path="/Productdetails/:id" element={<Productdetails />}></Route>
        <Route path="/Edit/:id" element={<Edit />}></Route>


      </Routes>
    </div>
  );
};

export default Allroutes;
