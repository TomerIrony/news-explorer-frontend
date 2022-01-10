import React from 'react';

function Footer(props) {
  return (
    <div className="footer">
      <p className="footer__power">© 2021 Supersite, Powered by News API</p>
      <div className="footer__container">
        <div>Home</div>
        <div>Practicum by Yandex</div>
        <div className="footer__github" />
        <div className="footer__linkedin" />
      </div>
    </div>
  );
}

export default Footer;
