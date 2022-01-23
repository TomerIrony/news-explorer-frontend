import React from 'react';

function Error(props) {
  return (
    <div className="found">
      <div className="found__container">
        <h2 className="found__title">Error</h2>
        <p className="found__text">
          Sorry, something went wrong during the request. There may be a
          connection issue or the server may be down. Please try again later.
        </p>
      </div>
    </div>
  );
}

export default Error;
