import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';

function Card(props) {
  const [saveCardPopup, setSaveCardPopup] = useState(false);
  const [marked, setMarked] = useState(false);

  return (
    <article className="card" id={props.cameFromSaved ? props.id : null}>
      <button
        className={
          props.cameFromSaved
            ? 'card__button-saved'
            : marked
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
          props.cameFromSaved
            ? props.deleteArticle(props.id)
            : props.loggedIn
            ? props.saveArticle(props.card)
            : console.log();
          if (saveCardPopup) {
            setSaveCardPopup(false);
          }
          props.loggedIn && !props.cameFromSaved
            ? setMarked(true)
            : console.log();
        }}
      />
      {props.cameFromSaved ? (
        <>
          {props.screenWidth < 884 || props.screenWidth === undefined ? null : (
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
            <p>{props.keyword}</p>
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
          {' '}
          <a href={props.url}>{props.title}</a>
        </h2>

        <p className="card__text">{props.text}</p>
        <p className="card__source">{props.source}</p>
      </div>
    </article>
  );
}

export default Card;
