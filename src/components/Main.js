import React, { useEffect, useState } from 'react';
import Header from './Header';
import About from './About';
import Footer from './Footer';
import Search from './Search';
import FooterMobile from './FooterMobile';
import NothingFound from './NothingFound';
import Preloader from './Preloader';
import NewsApi from '../utils/NewsApi';
import Error from './Error';
import useDidMountEffect from '../utils/useDidMountEffect';
import MainApi from '../utils/MainApi';

function Main(props) {
  const [cards, setCards] = useState(null);
  const [failedToLoad, setFailedToLoad] = useState(false);
  const [inputValue, setInputValue] = useState();
  const [notFound, setNotFound] = useState(false);
  const [tempArray, setTempArray] = useState([]);
  const [click, setClick] = useState(false);

  let i = 0;

  useEffect(() => {
    return () => {
      setTempArray({});
    };
  }, []);

  useDidMountEffect(() => {
    NewsApi.getArticles(inputValue)
      .then((res) => {
        const body = res;
        if (res.status === 'error') {
          setFailedToLoad(true);
          return;
        }
        if (res.totalResults === 0) {
          setCards(false);
          setNotFound(true);
          return;
        }

        setCards(body);
        setTempArray([
          res.articles[i],
          res.articles[i + 1],
          res.articles[i + 2],
        ]);
      })
      .catch((err) => {
        console.log(err);
        setFailedToLoad(true);
      });
  }, [inputValue]);

  function saveArticle(card) {
    const currentDateJson = JSON.stringify(card.publishedAt).split('T');
    const currentDate = currentDateJson[0].split('"')[1];
    MainApi.saveArticle(
      props.jwt,
      inputValue,
      card.title,
      card.content,
      currentDate,
      card.source.name,
      card.url,
      card.urlToImage,
    );
  }

  function handleLogInClick() {
    props.setIsLoggedInFormOpen(true);
  }

  function handleLogOut() {
    props.setLoggedIn(false);
    localStorage.removeItem('jwt');
  }
  return (
    <>
      <Header
        setInputValue={setInputValue}
        screenWidth={props.screenWidth}
        onLogInClick={handleLogInClick}
        logOut={handleLogOut}
        loggedIn={props.loggedIn}
        currentUser={props.currentUser}
        setSearchShow={props.setSearchShow}
        setClick={setClick}
        click={click}
      />
      {props.searchShow ? (
        cards ? (
          <Search
            cards={cards}
            screenWidth={props.screenWidth}
            setIsLoggedInFormOpen={props.setIsLoggedInFormOpen}
            loggedIn={props.loggedIn}
            tempArray={tempArray}
            setTempArray={setTempArray}
            saveArticle={saveArticle}
          />
        ) : failedToLoad ? (
          <Error />
        ) : notFound ? (
          <NothingFound />
        ) : (
          <Preloader />
        )
      ) : null}
      <About />
      {props.screenWidth > 740 ? <Footer /> : <FooterMobile />}
    </>
  );
}

export default Main;
