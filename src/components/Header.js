import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
  const [location, setLocation] = useState('home');

  return (
    <div className="header header__background">
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
                  ? 'header__buttons-saved'
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
            <div className="header__sign">
              <span onClick={() => props.logOut()}>
                {props.currentUser.name}
              </span>
              <div className="header__icon"></div>
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
      <div className="header__search">
        <h1 className="header__headline">What's going on in the world?</h1>
        <p className="header__text">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
        <form
          action="/"
          className="header__form"
          onSubmit={(e) => {
            e.preventDefault();
            props.setSearchShow(true);
          }}
        >
          <fieldset className="header__form-fieldset">
            <input
              className="header__form-input"
              type="text"
              placeholder="Enter topic"
              required
            />
            <button type="submit" className="header__form-btn">
              Search
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default Header;
