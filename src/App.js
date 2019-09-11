import React from 'react';
import './App.css';
import CardForm from './components/CardForm';
import Cards from './components/Cards';

class App extends React.Component {
  state = {
    cards: [
      { id: 1, front:"What is react?", back:"a JavaScript library for building user interfaces", },
      { id: 2, front:"Front", back:"Back", },
    ],
  };

  getId = () => {
    return Math.floor((1 + Math.random()) * 10000);
  };

  addCard = (cardData) => {
    const card = { id: this.getId(), ...cardData };
    this.setState({ cards: [card, ...this.state.cards], });
  };

  removeCard = (id) => {
    const cards = this.state.cards.filter( card => {
      if (card.id !== id)
        return card;
    });
    this.setState({ cards, });
  };

  render() {
    return (
      <div className="main">
        <h1>React Flash Cards</h1>
        <CardForm addCardFunction={this.addCard}/>
        <Cards 
          cards={this.state.cards} 
          removeCardFunction={this.removeCard}
        />
      </div>
    );
  };
};

export default App;
