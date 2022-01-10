import React, { useState } from 'react';
import Header from './Header';
import About from './About';
import Footer from './Footer';
import Search from './Search';

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
      {/*  <Search
        setIsLoggedInFormOpen={props.setIsLoggedInFormOpen}
        loggedIn={props.loggedIn}
      /> */}
      <About />
      <Footer />
    </>
  );
}

export default Main;
