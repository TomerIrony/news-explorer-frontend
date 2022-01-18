import React from 'react';
import { useRef } from 'react';
import { useState } from 'react/cjs/react.development';
import PopupWithForm from './PopupWithForm';
import InfoTooltip from './InfoTooltip';

function LoginFormPopup(props) {
  const [signUp, setSignUp] = useState(false);
  const [emailError, setEmailError] = useState();
  const [passwordError, setPasswordError] = useState();
  const [usernameError, setUsernameError] = useState();

  const inputRefEmail = useRef();
  const inputRefPassword = useRef();
  const inputRefName = useRef();

  const closePopup = () => {
    props.onClose();
    setEmailError(null);
    setPasswordError(null);
    setUsernameError(null);
    props.setValidationMessage(null);
    inputRefEmail.current.value = null;
    inputRefPassword.current.value = null;
    if (signUp) {
      inputRefName.current.value = null;
    }
  };

  const handleOnChange = () => {
    const email = document.getElementById('signinEmail');
    const password = document.getElementById('signinPassword');

    if (password.checkValidity() & email.checkValidity()) {
      props.setButton(false);
    } else {
      props.setButton(true);
    }

    if (signUp) {
      const username = document.getElementById('signinUsername');
      setUsernameError(username.validationMessage);
      if (
        password.checkValidity() &
        email.checkValidity() &
        username.checkValidity()
      ) {
        props.setButton(false);
      } else {
        props.setButton(true);
      }
    }

    setEmailError(email.validationMessage);
    setPasswordError(password.validationMessage);
  };
  function handleSubmit(e) {
    console.log(props.validationMessage);
    e.preventDefault();
    props.handleSubmit(
      inputRefEmail.current.value,
      inputRefPassword.current.value,
    );
  }

  function handleRegister(e) {
    e.preventDefault();
    props.handleRegister(
      inputRefEmail.current.value,
      inputRefPassword.current.value,
      inputRefName.current.value,
    );
  }

  return (
    <>
      <PopupWithForm
        title={signUp ? 'Sign up' : 'Sign in'}
        isOpen={props.isOpen}
        onClose={closePopup}
        onSubmit={signUp ? handleRegister : handleSubmit}
        buttonText={signUp ? 'Sign up' : 'Sign in'}
        id="signin"
        button={props.button}
        setSignUp={setSignUp}
        signUp={signUp}
        validationMessage={props.validationMessage}
        setValidationMessage={props.setValidationMessage}
      >
        <span className="form__input-title">Email</span>
        <input
          ref={inputRefEmail}
          onChange={handleOnChange}
          className="form__text-input form__input"
          type="email"
          required
          name="email"
          placeholder="Enter email"
          id="signinEmail"
        />
        <span className="form__validation_show">{emailError}</span>
        <span className="form__input-title">Password</span>
        <input
          className="form__text-input form__input"
          type="password"
          ref={inputRefPassword}
          required
          name="password"
          placeholder="Enter password"
          id="signinPassword"
          onChange={handleOnChange}
          minLength={8}
        />
        <span className="form__validation_show">{passwordError}</span>
        {signUp ? (
          <>
            <span className="form__input-title">Username</span>
          </>
        ) : null}
        {signUp ? (
          <input
            className="form__text-input form__input"
            type="text"
            ref={inputRefName}
            required
            name="name"
            placeholder="Enter your usename"
            id="signinUsername"
            onChange={handleOnChange}
          />
        ) : null}
        <span className="form__validation_show">{usernameError}</span>
      </PopupWithForm>
      <InfoTooltip
        isOpen={props.isRegisterOpen}
        onClose={closePopup}
        title="Registration successfully completed!"
        setRegisterPopupOpen={props.setRegisterPopupOpen}
        setIsLoggedInFormOpen={props.setIsLoggedInFormOpen}
        setSignUp={setSignUp}
      ></InfoTooltip>
    </>
  );
}

export default LoginFormPopup;
