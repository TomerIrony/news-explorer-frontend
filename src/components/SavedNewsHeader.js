import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavigationMobile from './NavigationMobile';
import Menu from './Menu';

function SavedNewsHeader(props) {
  const [location, setLocation] = useState('saved-news');
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [savedMenu, setSavedMenu] = useState(false);

  window.addEventListener('resize', () => {
    setScreenWidth(window.innerWidth);
  });

  return (
    <div className="">
      {savedMenu ? (
        <Menu
          loggedIn={props.loggedIn}
          location={location}
          onLogInClick={props.onLogInClick}
          setMenuState={setSavedMenu}
          cameFromSaved={true}
          logOut={props.logOut}
        />
      ) : null}
      <div className="header__home">
        {screenWidth > 740 ? (
          <>
            <span className="header__title">NewsExplorer</span>
            <div className="header__buttons">
              <Link
                className={
                  location === 'home'
                    ? 'header__buttons-home'
                    : 'header__buttons-home header__buttons-disable'
                }
                to={{ pathname: '/' }}
                onClick={() => {
                  setLocation('home');
                }}
              >
                <span>Home</span>
              </Link>
              {props.loggedIn ? (
                <Link
                  className={
                    location === 'saved-news'
                      ? 'saved__button-saved'
                      : 'header__buttons-saved header__buttons-disable'
                  }
                  to={{ pathname: '/saved-news' }}
                  onClick={() => {
                    setLocation('saved-news');
                  }}
                >
                  <span>Saved articles</span>
                </Link>
              ) : null}

              {props.loggedIn ? (
                <div className="saved__sign">
                  <button
                    className="saved__sign-btn"
                    onClick={() => props.logOut()}
                  >
                    {props.currentUser.name}
                  </button>
                  <div className="saved__exit"></div>
                </div>
              ) : null}
            </div>{' '}
          </>
        ) : (
          <NavigationMobile setMenuState={setSavedMenu} blackBar={true} />
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
    </div>
  );
}

export default SavedNewsHeader;
