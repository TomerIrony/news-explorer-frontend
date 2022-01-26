import React, { useEffect, useState } from 'react';
import SavedNewsHeader from './SavedNewsHeader';
import Footer from './Footer';
import Search from './Search';
import Temp from './Temp';
import FooterMobile from './FooterMobile';
import MainApi from '../utils/MainApi';

function SavedNews(props) {
  const [cards, setCards] = useState([]);
  const [numberOfArticles, setNumberOfArticles] = useState(cards.length);

  props.setSearchShow(false);

  useEffect(() => {
    setNumberOfArticles(cards.length);
  }, [cards.length]);

  useEffect(() => {
    MainApi.getSavedArticles(props.jwt)
      .then((res) => {
        const body = res;
        setCards(body);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.jwt]);

  function handleLogInClick() {
    props.setIsLoggedInFormOpen(true);
  }

  function deleteArticle(cardId) {
    MainApi.deleteArticle(cardId, props.jwt).then((res) => {
      cards.splice(
        cards.findIndex((a) => a._id === cardId),
        1,
      );
      setNumberOfArticles(numberOfArticles - 1);
    });
  }

  function handleLogOut() {
    props.setLoggedIn(false);
    localStorage.removeItem('jwt');
  }
  return (
    <>
      <SavedNewsHeader
        onLogInClick={handleLogInClick}
        logOut={handleLogOut}
        loggedIn={props.loggedIn}
        currentUser={props.currentUser}
        screenWidth={props.screenWidth}
      />
      <Temp
        keywords={cards}
        numberArticles={numberOfArticles}
        currentUser={props.currentUser}
      />
      <Search
        deleteArticle={deleteArticle}
        cards={cards}
        loggedIn={props.loggedIn}
        cameFromSaved={true}
      />
      {props.screenWidth > 740 ? <Footer /> : <FooterMobile />}
    </>
  );
}

export default SavedNews;
