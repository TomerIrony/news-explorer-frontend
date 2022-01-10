import React from 'react';

function InfoTooltip(props) {
  return (
    <div
      className={`popout ${props.isOpen ? `popout_opened` : ''}`}
      id={props.name}
    >
      <div className="popout__container">
        <button
          type="button"
          aria-label="close"
          className="popout__close-btn"
          id="closeProfileButton"
          onClick={props.onClose} //props.onClose
        ></button>
        <form
          onSubmit={props.onSubmit}
          action="/"
          name={props.name}
          className="form"
          id={props.id}
        >
          <fieldset className="form__fieldset">
            <legend>
              <h2 className="form__heading">{props.title}</h2>
            </legend>
            {props.children}
            <p className="form__validation_show form__error">
              {props.validationMessage}
            </p>
            <div className="form__sign">
              <p>
                <span
                  className="form__sign-link"
                  onClick={() => {
                    props.setRegisterPopupOpen(false);
                    props.setIsLoggedInFormOpen(true);
                    props.setSignUp(false);
                  }}
                >
                  Sign in
                </span>
              </p>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default InfoTooltip;
