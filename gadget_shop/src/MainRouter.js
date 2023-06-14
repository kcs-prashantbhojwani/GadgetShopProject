import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import About from './About';
import Products from './Products';
import Contact from './Contact';
import SingleProduct from './SingleProduct';
import Cart from './Cart';
import ErrorPage from './ErrorPage';
import Home from './Home';
import Header from './components/Header';
import Footer from './components/Footer';
import UserLogin from './Loginfiles/UserLogin'
import UserForgotPass from './Loginfiles/UserForgotPass';
import SignUpForm from './Loginfiles/SignUpForm';
import AdminRouter from './AdminRouter';
import SearchResult from './components/SearchResult';
import Payments from './components/Payments';

const Mainrouter = () => {
    const location = useLocation();
    const isAdmin = location.pathname.includes("/admin");
    const hideHeaderFooter = ['/userlogin', '/userforgotpass', '/signupform', '/payments'].includes(location.pathname);
  
    if (isAdmin){
      return(
        <>
        <Header />
        <AdminRouter/>
        <Footer />
        </>
      )
    }else{
      return(
        <>
        {!hideHeaderFooter && <Header/>}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/searchresult" element={<SearchResult />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/singleproduct/:product_id" element={<SingleProduct />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/userlogin" element={<UserLogin />} />
            <Route path="/userforgotpass" element={<UserForgotPass />} />
            <Route path="/signupform" element={<SignUpForm />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          {!hideHeaderFooter && <Footer />}
        </>
      )
    }
  }

    // const hideHeaderFooter = ['/userlogin', '/userforgotpass', '/signupform'].includes(location.pathname);
    // return (
    //     <>
    //       {!hideHeaderFooter && <Header />}
    //       <Routes>
    //         <Route path="/" element={<Home />} />
    //         <Route path="/about" element={<About />} />
    //         <Route path="/products" element={<Products />} />
    //         <Route path="/contact" element={<Contact />} />
    //         <Route path="/singleproduct/:product_id" element={<SingleProduct />} />
    //         <Route path="/cart" element={<Cart />} />
    //         <Route path="/userlogin" element={<UserLogin />} />
    //         <Route path="/userforgotpass" element={<UserForgotPass />} />
    //         <Route path="/signupform" element={<SignUpForm />} />
    //         <Route path="*" element={<ErrorPage />} />
    //       </Routes>
    //       {!hideHeaderFooter && <Footer />}
    //     </>
    //   );}

export default Mainrouter;