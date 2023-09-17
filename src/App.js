import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
// import { About } from "./components/About";
import { NavBar } from "./components/NavBar";
import { OrderSummary } from "./components/OrderSummary";
import { PageNotFound } from "./components/PageNotFound";
import { FeaturedProduct } from "./components/FeaturedProduct";
import { Product } from "./components/Product";
import { NewProduct } from "./components/NewProduct";
import { Users } from "./components/Users";
import { UsersDetail } from "./components/UsersDetail";
import {Profile} from './components/Profile' 
import { AuthProvider } from "./utils/auth";
import { Login } from "./components/Login";
import { RequiredAuth } from "./components/RequiredAuth";

const LazyAbout = React.lazy(() => import("./components/About"));

const App = () => {
  return (
    <>
      <AuthProvider>
      <NavBar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="about"
          element={
            <React.Suspense fallback="Loading.....">
              <LazyAbout />
            </React.Suspense>
          }
        />
        <Route path="order-summary" element={<OrderSummary />} />
        <Route path="product" element={<Product />}>
          <Route index element={<FeaturedProduct />} />
          <Route path="features" element={<FeaturedProduct />} />
          <Route path="new" element={<NewProduct />} />
        </Route>
        <Route path="users" element={<Users />}></Route>
        <Route path="users/:userId" element={<UsersDetail />} />
          <Route path="profile" element={<RequiredAuth><Profile /></RequiredAuth>} />
        <Route path="login" element={<Login/>} />
          
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      </AuthProvider>
     
    </>
  );
};
export default App;
