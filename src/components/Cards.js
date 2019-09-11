import React from 'react';
import Card from './Card';

const Cards = (props) => (
  <div className="cards">
    {
      props.cards.map( card => (
        <Card 
          key={card.id} 
          { ...card } 
          remove={props.removeCardFunction}
          editCard={props.editCardFunction}
        />
      ))
    }
  </div>
);

export default Cards;