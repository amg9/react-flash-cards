import React from 'react';


class Card extends React.Component {
  state = { showFront: true, }

  toggleSide = () => {
    this.setState({ showFront: !this.state.showFront, });
  };

  render() {
    const card = this.props
    return(
      <div 
        className="card" 
        key={card.id}
        onClick={this.toggleSide}
      >
        { this.state.showFront ? card.front : card.back }
      </div>
    );
  };
};

// const Card = ({ id, front, back, showFront }) => (
//   <div 
//     className="card" 
//     key={id}
//     onClick={}
//   >
//     { showFront ? front : back }
//   </div>
// );

export default Card;