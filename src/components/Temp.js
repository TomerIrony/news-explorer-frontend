import React from 'react';

function Temp(props) {
  return (
    <div className="saved__container">
      <p className="saved__article">Saved articles</p>
      <h2 className="saved__header">
        {props.currentUser.name}, you have 5 saved articles
      </h2>
      <p className="saved__keywords">
        By keywords: <b>Nature, Yellowstone, and 2 other</b>
      </p>
    </div>
  );
}

export default Temp;
