export default class Api {
  constructor({ baseUrl, token }) {
    this._baseUrl = baseUrl;
    this._token = token;

  }

  getUsers() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: this._token
      },
    })
  }


  getCards() {
    return fetch(`${this._baseUrl}/cards`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
         authorization: this._token
      },
    })
  }

  createCards(data) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
         authorization: this._token
                },
      body: JSON.stringify(data)
    })
  }

  updateCards(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: this._token,
        "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
  }

  deleteCard(idItem) {
    return fetch(`${this._baseUrl}/cards/${idItem}`, {
      method: "DELETE",
      headers: {
                  authorization: this._token,
                "Content-Type": "application/json" },
  })
 }

}







