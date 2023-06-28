import "./index.css";

import Section from "../components/Section.js";
import Card from "../components/Card.js";
import {initialCards, cardTemplate, cardsContainer} from "../utils/constants.js"

const cardList = new Section({
  items: initialCards,
  renderer: (item) =>{
const card = new Card(item, cardTemplate)
const cardElement = card.genetateCard()
cardList.setItem(cardElement)

}}, cardsContainer)

cardList.renderItems();

