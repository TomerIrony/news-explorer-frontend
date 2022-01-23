import '../pages/App.css';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './Main';
import SavedNews from './SavedNews';
import ProtectedRoute from './ProtectedRoute';
import LoginFormPopup from './LoginFormPopup';
import auth from '../utils/auth';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoggedInFormOpen, setIsLoggedInFormOpen] = useState(false);
  const [registerPopupOpen, setRegisterPopupOpen] = useState(false);
  const [jwt, setJwt] = useState();
  const [currentUser, setCurrentUser] = useState();
  const [button, setButton] = useState(true);
  const [validationMessage, setValidationMessage] = useState();
  const [searchShow, setSearchShow] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  window.addEventListener('resize', () => {
    setScreenWidth(window.innerWidth);
  });

  React.useEffect(() => {
    if (localStorage.getItem('jwt') !== null) {
      const jwt = localStorage.getItem('jwt');
      setJwt(jwt);
      auth
        .getUser(jwt)
        .then((res) => {
          let respond = res;
          setCurrentUser(respond);

          if (res) {
            setLoggedIn(true);
          }
        })
        .catch((err) => {
          console.log(err.status);
        });
    }
  }, []);

  function handleError(err) {
    if (err === 'Error: 404 Not Found') {
      setValidationMessage('Inncorrect password or email');
    } else if (err === 'Error: 400 Bad Request') {
      setValidationMessage('must be a valid email');
    } else if (err === 'Error: 409 Conflict') {
      setValidationMessage('This email is not available');
    } else if (err === 'Error: 401 Unauthorized') {
      setValidationMessage('Inncorrect password or email');
    }
  }

  function closeAllPopups() {
    setIsLoggedInFormOpen(false);
    setRegisterPopupOpen(false);
  }

  window.onkeydown = function (event) {
    if (event.keyCode === 27) {
      setIsLoggedInFormOpen(false);
      setRegisterPopupOpen(false);
    }
  };

  function handleLogin(email, password) {
    auth
      .signin(email, password)
      .then((res) => {
        if (res.token) {
          localStorage.setItem('jwt', res.token);
          setJwt(jwt);
        }
        auth
          .getUser(res.token)
          .then((res) => {
            setCurrentUser(res);
            setLoggedIn(true);
          })
          .finally(() => {
            closeAllPopups();
          });
      })
      .catch((err) => {
        handleError(err);
        console.log(err);
      });
  }

  function handleRegister(email, password, name) {
    auth
      .register(password, email, name)
      .then((res) => {
        if (res) {
          setIsLoggedInFormOpen(false);
          setRegisterPopupOpen(true);
          setValidationMessage(null);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="root">
      <LoginFormPopup
        handleSubmit={handleLogin}
        handleRegister={handleRegister}
        isOpen={isLoggedInFormOpen}
        setIsLoggedInFormOpen={setIsLoggedInFormOpen}
        isRegisterOpen={registerPopupOpen}
        setRegisterPopupOpen={setRegisterPopupOpen}
        onClose={closeAllPopups}
        setButton={setButton}
        button={button}
        validationMessage={validationMessage}
        setValidationMessage={setValidationMessage}
      />
      <Routes>
        <Route
          path="/saved-news"
          element={
            <ProtectedRoute
              path="/saved-news"
              screenWidth={screenWidth}
              loggedIn={loggedIn}
            />
          }
        >
          <Route
            element={
              <SavedNews
                setLoggedIn={setLoggedIn}
                loggedIn={loggedIn}
                currentUser={currentUser}
                jwt={jwt}
              />
            }
            path="/saved-news"
          />
        </Route>
        <Route
          path="*"
          excat={true}
          element={
            <Main
              setIsLoggedInFormOpen={setIsLoggedInFormOpen}
              setLoggedIn={setLoggedIn}
              loggedIn={loggedIn}
              currentUser={currentUser}
              setSearchShow={setSearchShow}
              searchShow={searchShow}
              screenWidth={screenWidth}
              jwt={jwt}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
