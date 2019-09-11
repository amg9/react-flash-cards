import React from 'react';
import Card from './Card';

const Cards = ({cards}) => (
  <div className="cards">
    {
      cards.map( card => (
        <Card key={card.id} { ...card } />
      ))
    }
  </div>
);

export default Cards;