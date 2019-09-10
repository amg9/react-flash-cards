import React from 'react';
import './App.css';
import CardForm from './components/CardForm';

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

  render() {
    return (
      <div className="main">
        <h1>React Flash Cards</h1>
        <CardForm addCardFunction={this.addCard}/>
        <div className="cards">
          {
            this.state.cards.map( card => (
              <div className="card">{card.front}</div>
            ))
          }
        </div>
      </div>
    );
  };
};

export default App;
