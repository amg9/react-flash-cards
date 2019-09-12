import React from 'react';
import CardForm from './CardForm';
import Cards from './Cards';

class FlashCards extends React.Component {
  state = {
    cards: [
      { id: 1, front:"What is react?", back:"a JavaScript library for building user interfaces", },
      { id: 2, front:"MVC", back:"Models, Views, Controllers", },
      { id: 3, front:"state", back:"JS Object", },
    ],
    showForm: false,
  };

  getId = () => {
    return Math.floor((1 + Math.random()) * 10000);
  };

  addCard = (cardData) => {
    const card = { id: this.getId(), ...cardData };
    this.setState({ cards: [card, ...this.state.cards], });
  };

  editCard = (cardData) => {
    const cards = this.state.cards.map( card => {
      if (card.id === cardData.id)
        return cardData;
      return card;
    });
    this.setState({ cards, });
  };

  removeCard = (id) => {
    const cards = this.state.cards.filter( card => {
      if (card.id !== id)
        return card;
    });
    this.setState({ cards, });
  };

  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm})
  }

  render() {
    return (
      <div>
        <h1>React Flash Cards</h1>
        <button onClick={this.toggleForm}>Toggle Form</button>
        { this.state.showForm && <CardForm addCardFunction={this.addCard} /> }
        <Cards 
          cards={this.state.cards} 
          removeCardFunction={this.removeCard}
          editCardFunction={this.editCard}
        />
      </div>
    );
  };
};

export default FlashCards;
