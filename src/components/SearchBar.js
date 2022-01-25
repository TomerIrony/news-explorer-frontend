import React from 'react';

function SearchBar(props) {
  return (
    <div className="header__search">
      <div className="header__container">
        <h1 className="header__headline">What's going on in the world?</h1>
        <p className="header__text">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
      </div>
      <form
        action="/"
        className="header__form"
        onSubmit={(e) => {
          e.preventDefault();
          props.setSearchShow(true);
          props.setInputValue(e.target[1].value);
        }}
      >
        <fieldset className="header__form-fieldset">
          <input
            className="header__form-input"
            type="text"
            placeholder="Enter topic"
            required
            id="searchBar"
          />
          <button
            type="submit"
            className="header__form-btn"
            onClick={() => {
              props.setClick(!props.click);
            }}
          >
            Search
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default SearchBar;
