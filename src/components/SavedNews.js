import React, { useState } from 'react';
import SavedNewsHeader from './SavedNewsHeader';
import Footer from './Footer';
import Search from './Search';
import Temp from './Temp';

function SavedNews(props) {
  function handleLogInClick() {
    props.setIsLoggedInFormOpen(true);
  }

  function handleLogOut() {
    props.setLoggedIn(false);
    localStorage.removeItem('jwt');
  }
  return (
    <>
      <SavedNewsHeader
        onLogInClick={handleLogInClick}
        logOut={handleLogOut}
        loggedIn={props.loggedIn}
        currentUser={props.currentUser}
        screenWidth={props.screenWidth}
      />
      <Temp currentUser={props.currentUser} />
      <Search loggedIn={props.loggedIn} cameFromSaved={true} />
      <Footer />
    </>
  );
}

export default SavedNews;
