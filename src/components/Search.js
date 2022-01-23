import React, { useEffect, useState } from 'react';
import Card from './Card';

function Search(props) {
  let articles = props.cards.articles;
  let i = 0;

  const [number, setNumber] = useState(3);

  const changeI = () => {
    setNumber(number + 3);
    let numbers = number;
    props.setTempArray([
      ...props.tempArray,
      articles[numbers],
      articles[numbers + 1],
      articles[numbers + 2],
    ]);
  };

  return (
    <div className={props.cameFromSaved ? 'search__saved' : 'search'}>
      {props.cameFromSaved ? null : (
        <h2 className="search__header">Search results</h2>
      )}

      <div className="elements__saved">
        {props.cameFromSaved
          ? props.cards.map((card, i) => {
              return (
                <Card
                  deleteArticle={props.deleteArticle}
                  id={card._id}
                  date={card.date}
                  text={card.text}
                  key={i}
                  src={card.image}
                  source={card.source}
                  title={card.title}
                  cameFromSaved={true}
                  keyword={card.keyword}
                  loggedIn={props.loggedIn}
                />
              );
            })
          : props.tempArray.map((card, i) => {
              let date = '';

              if (card.publishedAt) {
                const currentDateJson = JSON.stringify(card.publishedAt).split(
                  'T',
                );
                const currentDate = currentDateJson[0].split('"')[1];
                date = currentDate;
              }
              return (
                <Card
                  setIsLoggedInFormOpen={props.setIsLoggedInFormOpen}
                  loggedIn={props.loggedIn}
                  src={card.urlToImage}
                  cameFromSaved={props.cameFromSaved}
                  date={date}
                  title={card.title}
                  source={card.source.name}
                  text={card.content}
                  link={card.url}
                  key={i}
                  card={card}
                  saveArticle={props.saveArticle}
                />
              );
            })}
      </div>
      {props.cameFromSaved ? null : (
        <div className="search__container">
          <button
            onClick={() => {
              changeI();
            }}
            className="search__button"
          >
            Show more
          </button>
        </div>
      )}
    </div>
  );
}

export default Search;
