import React from 'react';
import Card from './Card';
import card1 from '../images/card1.jpg';
import card2 from '../images/card2.jpg';
import card3 from '../images/card3.jpg';

function Search(props) {
  return (
    <div className={props.cameFromSaved ? 'search__saved' : 'search'}>
      {props.cameFromSaved ? null : (
        <h2 className="search__header">Search results</h2>
      )}

      <div className="elements__saved">
        <Card
          setIsLoggedInFormOpen={props.setIsLoggedInFormOpen}
          loggedIn={props.loggedIn}
          src={card1}
          cameFromSaved={props.cameFromSaved}
          date="November 4, 2020"
          marked={true}
        />
        <Card
          setIsLoggedInFormOpen={props.setIsLoggedInFormOpen}
          loggedIn={props.loggedIn}
          src={card2}
          cameFromSaved={props.cameFromSaved}
          date="February 19, 2019"
        />
        <Card
          setIsLoggedInFormOpen={props.setIsLoggedInFormOpen}
          loggedIn={props.loggedIn}
          src={card3}
          cameFromSaved={props.cameFromSaved}
          date="October 19, 2020"
        />
      </div>
      {props.cameFromSaved ? null : (
        <div className="search__container">
          <button className="search__button">Show more</button>
        </div>
      )}
    </div>
  );
}

export default Search;
