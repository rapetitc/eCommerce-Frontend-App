import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

import Main from "./Pages/Main/Main";
import LogIn from "./Pages/LogIn/LogIn";
import LogOut from "./Pages/LogOut/LogOut";
import SignIn from "./Pages/SignIn/SignIn";
import Profile from "./Pages/Profile/Profile";
import Cart from "./Pages/Cart/Cart";
import ItemDetailed from "./Pages/ItemDetailed/ItemDetailed";
import Search from "./Pages/Search/Search.jsx";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/login' element={<LogIn />}></Route>
        <Route path='/logout' element={<LogOut />}></Route>
        <Route path='/signin' element={<SignIn />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/product'>
          <Route path=':id' element={<ItemDetailed />}></Route>
        </Route>
        <Route path='/search'>
          <Route path=':value' element={<Search />}></Route>
        </Route>
        <Route path='*' element={<PageNotFound />}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
