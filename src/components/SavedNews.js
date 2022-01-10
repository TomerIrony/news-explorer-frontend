import React, { useState } from 'react';
import SavedNewsHeader from './SavedNewsHeader';
import Footer from './Footer';
import Search from './Search';
import Temp from './Temp';

function SavedNews(props) {
  const [cameFromSaved, setCameFromSaved] = useState(true);
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
      />
      <Temp currentUser={props.currentUser} />
      <Search loggedIn={props.loggedIn} cameFromSaved={cameFromSaved} />
      <Footer />
    </>
  );
}

export default SavedNews;
