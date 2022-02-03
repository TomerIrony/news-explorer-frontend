import React from 'react';

function Temp(props) {
  let tempArray = [];

  for (let index = 0; index < props.keywords.length; index++) {
    const element = props.keywords[index].keyword;
    tempArray.push(element);
  }

  return (
    <div className="saved__container">
      <p className="saved__article">Saved articles</p>
      <h2 className="saved__header">
        {props.currentUser.name}, you have {props.numberArticles} saved{' '}
        {props.numberArticles > 1 ? 'articles' : 'article'}
      </h2>
      <p className="saved__keywords">
        By keywords:{' '}
        <b>
          {tempArray[0]}, {tempArray[1]}, and {tempArray.length - 2} other
        </b>
      </p>
    </div>
  );
}

export default Temp;
