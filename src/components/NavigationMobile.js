import React from 'react';

function NavigationMobile(props) {
  return (
    <>
      <span className="header__title">NewsExplorer</span>
      <span
        onClick={() => {
          props.setMenuState(true);
        }}
        className={props.blackBar ? 'header__menu-black' : 'header__menu'}
      />
    </>
  );
}

export default NavigationMobile;
