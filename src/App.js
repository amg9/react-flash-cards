import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    cards: [
      { id: 1, front:"What is react?", back:"a JavaScript library for building user interfaces", },
      { id: 2, front:"Front", back:"Back", },
    ],
  };

  render() {
    return (
      <div>
        <h1>React Flash Cards</h1>
        {
          this.state.cards.map( card => (
            <div>{card.front}</div>
          ))
        }
      </div>
    );
  };
};

export default App;
