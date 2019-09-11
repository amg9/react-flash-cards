import React from 'react';


class Card extends React.Component {
  state = { showFront: true, }

  toggleSide = () => {
    this.setState({ showFront: !this.state.showFront, });
  };

  render() {
    const card = this.props
    return(
      <div key={card.id}>
        <div className="card" onClick={this.toggleSide}>
          { this.state.showFront ? card.front : card.back }
        </div>
        <button>Edit</button>
        <button onClick={() => card.remove(card.id)}>Delete</button>
      </div>
    );
  };
};

export default Card;