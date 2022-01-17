import React, { useState } from 'react';
import Header from './Header';
import About from './About';
import Footer from './Footer';
import Search from './Search';
import FooterMobile from './FooterMobile';
import { Navigate } from 'react-router-dom';
import NothingFound from './NothingFound';
import Preloader from './Preloader';

function Main(props) {
  function handleLogInClick() {
    props.setIsLoggedInFormOpen(true);
  }

  function handleLogOut() {
    props.setLoggedIn(false);
    localStorage.removeItem('jwt');
  }
  return (
    <>
      <Header
        screenWidth={props.screenWidth}
        onLogInClick={handleLogInClick}
        logOut={handleLogOut}
        loggedIn={props.loggedIn}
        currentUser={props.currentUser}
        setSearchShow={props.setSearchShow}
      />
      {props.searchShow ? (
        <Search
          setIsLoggedInFormOpen={props.setIsLoggedInFormOpen}
          loggedIn={props.loggedIn}
        />
      ) : null}
      <NothingFound />
      <Preloader />
      <About />
      {props.screenWidth > 740 ? <Footer /> : <FooterMobile />}
    </>
  );
}

export default Main;
