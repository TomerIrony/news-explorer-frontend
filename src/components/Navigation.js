import React from 'react';
import { Link } from 'react-router-dom';

function Navigation(props) {
  return (
    <>
      <span className="header__title">NewsExplorer</span>
      <div className="header__buttons">
        <Link
          className={
            props.location === 'home'
              ? 'header__buttons-home'
              : 'header__buttons-home header__buttons-disable'
          }
          to={{ pathname: '/' }}
          onClick={() => {
            props.setLocation('home');
          }}
        >
          <span>Home</span>
        </Link>
        {props.loggedIn ? (
          <Link
            className={
              props.location === 'saved-news'
                ? 'header__buttons-saved'
                : 'header__buttons-saved header__buttons-disable'
            }
            to={{ pathname: '/saved-news' }}
            onClick={() => {
              props.setLocation('saved-news');
            }}
          >
            <span>Saved articles</span>
          </Link>
        ) : null}

        {props.loggedIn ? (
          <div className="header__sign">
            <button className="header__sign-btn" onClick={() => props.logOut()}>
              {props.currentUser.name}
            </button>
            <div className="header__icon"></div>
          </div>
        ) : (
          <div className="header__sign">
            <button
              className="header__sign-btn"
              onClick={() => props.onLogInClick()}
            >
              Sign in
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Navigation;
