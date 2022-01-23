class newsApi {
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

  getArticles(q) {
    return fetch(`${this._url}/everything`, {
      // Running the request to the newsorg api from my
      method: 'POST', // backend to insure my apikey is private
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        q,
      }),
    }).then(this._checkResponse);
  }
}

const NewsApi = new newsApi({
  baseUrl: 'http://localhost:3000',
});

export default NewsApi;
