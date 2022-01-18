import React from 'react';
import { Link } from 'react-router-dom';

function Menu(props) {
  return (
    <div className="header__menu-background">
      <div className="header__menu-show">
        <div className="header__menu-container">
          <div
            className={
              props.cameFromSaved ? 'header__menu-white' : 'header__menu-title'
            }
          >
            NewsExplorer
          </div>
          <div
            onClick={() => {
              props.setMenuState(false);
            }}
            className="header__menu-exit"
          />
        </div>
        <div className="header__underline"></div>

        {(props.location === 'home') & props.loggedIn ? (
          <Link className="header__menu-home" to={{ pathname: '/saved-news' }}>
            <div className="header__menu-home">Saved news</div>
          </Link>
        ) : (
          <Link className="header__menu-home" to={{ pathname: '/home' }}>
            <div className="header__menu-home">Home</div>
          </Link>
        )}
        {props.loggedIn ? (
          <button
            onClick={() => {
              props.setMenuState(false);
              props.logOut(true);
            }}
            className="header__menu-signin"
          >
            Sign out
          </button>
        ) : (
          <button
            onClick={() => {
              const cameFromMobile = true;
              props.setMenuState(false);
              props.onLogInClick(true, cameFromMobile);
            }}
            className="header__menu-signin"
          >
            Sign in
          </button>
        )}
      </div>
    </div>
  );
}

export default Menu;
