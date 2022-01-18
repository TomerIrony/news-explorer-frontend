import React from 'react';

function NothingFound(props) {
  return (
    <div className="found">
      <div className="found__container">
        <span className="found__svg" />
        <h2 className="found__title">Nothing found</h2>
        <p className="found__text">
          Sorry, but nothing matched your search terms.
        </p>
      </div>
    </div>
  );
}

export default NothingFound;
