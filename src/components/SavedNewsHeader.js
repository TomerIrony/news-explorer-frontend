import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SavedNewsHeader(props) {
  const [location, setLocation] = useState('saved-news');

  return (
    <div className="saved">
      <div className="header__home">
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
              <span onClick={() => props.logOut()}>
                {props.currentUser.name}
              </span>
              <div className="saved__exit"></div>
            </div>
          ) : (
            <span className="header__sign" onClick={() => props.onLogInClick()}>
              Sign in
            </span>
          )}
        </div>
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
