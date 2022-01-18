import React, { useState, useEffect } from 'react';

function Card(props) {
  const [saveCardPopup, setSaveCardPopup] = useState(false);
  const [mobileMode, setMobileMode] = useState();

  window.addEventListener('resize', () => {
    setMobileMode(window.innerWidth);
  });

  return (
    <article className="card">
      <button
        className={
          props.cameFromSaved
            ? 'card__button-saved'
            : props.marked
            ? 'card__marked'
            : 'card__button'
        }
        type="button"
        aria-label="card save"
        id="cardSave"
        onMouseEnter={() => {
          setSaveCardPopup(true);
        }}
        onClick={() => {
          if (saveCardPopup) {
            setSaveCardPopup(false);
          }
        }}
      />
      {props.cameFromSaved ? (
        <>
          {mobileMode < 884 || mobileMode === undefined ? null : (
            <div
              className={`card__login ${
                saveCardPopup ? `card__login-show` : null
              }`}
            >
              <p
                onClick={() => {
                  /* props.setIsLoggedInFormOpen(true); */
                  return;
                }}
              >
                Remove from saved
              </p>
            </div>
          )}

          <div className="card__keyword">
            <p>Nature</p>
          </div>
        </>
      ) : null}

      {props.loggedIn ? null : (
        <div
          className={`card__login ${saveCardPopup ? `card__login-show` : null}`}
        >
          <p
            onClick={() => {
              props.setIsLoggedInFormOpen(true);
            }}
          >
            Sign in to save articles
          </p>
        </div>
      )}
      <img id="cardImage" src={props.src} alt="dd" className="card__image" />
      <div className="card__caption">
        <p className="card__date">{props.date}</p>
        <h2 className="card__name">
          Everyone Needs a Special 'Sit Spot' in Nature
        </h2>
        <p className="card__text">
          Ever since I read Richard Louv's influential book, "Last Child in the
          Woods," the idea of having a special "sit spot" has stuck with me.
          This advice, which Louv attributes to nature educator Jon Young, is
          for both adults and children to find...
        </p>
        <p className="card__source">treehugger</p>
      </div>
    </article>
  );
}

export default Card;
