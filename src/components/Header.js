import React, { useState } from 'react';
import SearchBar from './SearchBar';
import Navigation from './Navigation';
import NavigationMobile from './NavigationMobile';
import Menu from './Menu';

function Header(props) {
  const [location, setLocation] = useState('home');
  const [menuState, setMenuState] = useState(false);

  return (
    <>
      <div className="header">
        <div className="header__background">
          {menuState ? (
            <Menu
              loggedIn={props.loggedIn}
              location={location}
              onLogInClick={props.onLogInClick}
              setMenuState={setMenuState}
              logOut={props.logOut}
            />
          ) : null}
          <div className="header__home">
            {props.screenWidth > 740 ? (
              <Navigation
                location={location}
                onLogInClick={props.onLogInClick}
                logOut={props.logOut}
                setLocation={setLocation}
                loggedIn={props.loggedIn}
                currentUser={props.currentUser}
              />
            ) : (
              <NavigationMobile
                setMenuState={setMenuState}
                location={location}
                onLogInClick={props.onLogInClick}
                logOut={props.logOut}
                setLocation={setLocation}
                loggedIn={props.loggedIn}
                currentUser={props.currentUser}
              />
            )}
          </div>
          {(location === 'saved-news') & props.loggedIn ? (
            <div className="header__highlight" />
          ) : null}
          {(location === 'home') & props.loggedIn ? (
            <div className="header__highlight-home" />
          ) : location === 'saved-news' ? null : (
            <div className="header__highlight-home-logged-out" />
          )}
          <div className="header__underline" />

          <SearchBar setSearchShow={props.setSearchShow} />
        </div>
      </div>
    </>
  );
}

export default Header;
