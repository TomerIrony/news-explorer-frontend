import React, { useState } from 'react';

function SearchBar(props) {
  const [buttonState, setButtonState] = useState(false);
  function handleChange() {
    const searchInput = document.getElementById('searchBar');
    setButtonState(searchInput.checkValidity());
  }
  return (
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
            onChange={handleChange}
            id="searchBar"
          />
          <button
            type="submit"
            className={
              buttonState ? 'header__form-btn' : 'header__form-btn-disabled'
            }
            disabled={buttonState ? false : true}
          >
            Search
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default SearchBar;
