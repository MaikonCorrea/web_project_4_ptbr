export default class Api {
  constructor({ baseUrl, headers, token }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
    this._token = token;
  }

  getUsers(token) {
    return fetch(`${this._baseUrl}/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "authorization": this._token
      },
    })
  }

  getCards() {
    return fetch(`${this._baseUrl}/cards`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "authorization": this._token
      },
    })
  }

  createCards(data) {
    return fetch(this._baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...this._headers },
        body: JSON.stringify(data)
    })
  }

  updateCards(data) {
    return fetch(this._baseUrl, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        ...this._headers },
        body: JSON.stringify(data)
    })
  }

  deleteCard(imagId) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json", id: imageId },
  })
 }

}







