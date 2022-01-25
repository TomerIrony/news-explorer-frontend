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
    const currentDateObj = new Date();
    const currentDateJson = JSON.stringify(currentDateObj).split('T');
    const currentDate = currentDateJson[0].split('"')[1];
    const d = new Date();
    d.setDate(d.getDate() - 7);
    const myJson = JSON.stringify(d).split('T');
    const date = myJson[0].split('"')[1];
    return fetch(
      `https://newsapi.org/v2/everything?q=${q}&from=${date}&to=${currentDate}&pageSize=100&sortBy=popularity&apiKey=552795a1a87c40fab7a83f892eb04f0b`,
      {
        method: 'GET',
        headers: {
          Accept: '*/*',
          'Accept-Encoding': 'gzip, deflate, br',
          Connection: 'keep-alive',
        },
      },
    ).then(this._checkResponse);
  }
}

const NewsApi = new newsApi({
  /* baseUrl: 'https://api.news.students.nomoreparties.sbs', */
  baseUrl: 'http://localhost:3000',
});

export default NewsApi;
