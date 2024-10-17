import React from "react";
import WebFont from "webfontloader";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import {Route, Routes} from 'react-router-dom';
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Search from "./pages/Search";
import Products from "./pages/Products";
import LoginSignup from "./pages/LoginSignup";
import Profile from "./pages/Profile";
import ProtectedRoutes from "./components/ProtectedRoutes";
import ForgotPassword from "./pages/ForgotPassword";
import CartItems from "./pages/CartItems";
import Shipping from "./pages/Shipping";
import ConfirmOrder from "./pages/ConfirmOrder";
import Payment from "./pages/Payment";
import MyOrders from "./pages/MyOrders";
import OrderDetails from "./pages/OrderDetails";

function App() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  }, []);
  return (
    <div className=" bg-gray-300">
      <Navbar/>   

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/products/:keyword?" element={<Products />} />
          <Route path="/search" element={<Search />} />
          <Route path="/login-signup" element={<LoginSignup />} />
          <Route path="/account" element={<ProtectedRoutes element={Profile} />} />
          <Route path="/cart" element={<CartItems/>} />
          <Route path="/password/forgot" element={<ProtectedRoutes element={ForgotPassword} />} />
          <Route path="/shipping" element={<ProtectedRoutes element={Shipping} />} />
          <Route path="/process/payment" element={<ProtectedRoutes element={Payment} />} />
          <Route path="/orders" element={<ProtectedRoutes element={MyOrders} />} />
          <Route path="/order/:id" element={<ProtectedRoutes element={ OrderDetails } />} />
          <Route path="/order/confirm" element={<ProtectedRoutes element={ConfirmOrder} />} />
        </Routes>

      
    </div>
  );
}

export default App;
