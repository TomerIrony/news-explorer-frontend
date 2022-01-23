class mainApi {
  constructor({ baseUrl, headers }) {
    this._url = baseUrl;
    this._headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status} ${res.statusText}`);
    }
  }

  saveArticle(JWT, keyword, title, text, date, source, link, image) {
    return fetch(`${this._url}/articles`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${JWT}`,
      },
      body: JSON.stringify({
        keyword,
        title,
        text,
        date,
        source,
        link,
        image,
      }),
    }).then(this._checkResponse);
  }

  getSavedArticles(JWT) {
    return fetch(`${this._url}/articles`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${JWT}`,
      },
    }).then(this._checkResponse);
  }

  deleteArticle(cardId, JWT) {
    return fetch(`${this._url}/articles/${cardId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${JWT}`,
      },
    }).then(this._checkResponse);
  }
}

const MainApi = new mainApi({
  baseUrl: 'http://localhost:3000',
});

export default MainApi;
