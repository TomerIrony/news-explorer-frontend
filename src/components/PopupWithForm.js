function PopupWithForm(props) {
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
            <button
              disabled={props.button}
              type="submit"
              className={
                props.button
                  ? 'form__submit-btn form__submit form__submit-btn_disable'
                  : 'form__submit-btn form__submit'
              }
            >
              {props.buttonText}
            </button>
            <div className="form__sign">
              {props.signUp ? (
                <p>
                  or{' '}
                  <span
                    className="form__sign-link"
                    onClick={() => {
                      props.setSignUp(!props.signUp);
                    }}
                  >
                    Sign in
                  </span>
                </p>
              ) : (
                <p>
                  or{' '}
                  <span
                    className="form__sign-link"
                    onClick={() => {
                      props.setSignUp(!props.signUp);
                    }}
                  >
                    Sign up
                  </span>
                </p>
              )}
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
