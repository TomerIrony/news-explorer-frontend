import React from 'react';
import { Link } from 'react-router-dom';

function FooterMobile(props) {
  return (
    <>
      <footer className="footer">
        <div className="footer__container">
          <Link className="footer__link" to="/">
            <div>Home</div>
          </Link>

          <a
            href="https://practicum.yandex.com/"
            rel="noreferrer"
            target="_blank"
            className="footer__link"
          >
            Practicum by Yandex
          </a>
        </div>
        <div className="footer__icon-container">
          <a
            className="footer__github"
            href="https://github.com/TomerIrony"
            rel="noreferrer"
            target="_blank"
          >
            <div />
          </a>
          <a
            className="footer__linkedin"
            href="https://www.linkedin.com/in/tomer-irony-653162210/"
            rel="noreferrer"
            target="_blank"
          >
            <div />
          </a>
        </div>
      </footer>
      <p className="footer__power">© 2021 Supersite, Powered by News API</p>
    </>
  );
}

export default FooterMobile;
