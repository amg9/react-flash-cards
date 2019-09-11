import React from 'react';
import CardForm from './CardForm';

class Card extends React.Component {
  state = { showFront: true, showEdit: false, }

  toggleSide = () => {
    this.setState({ showFront: !this.state.showFront, });
  };

  toggleEdit = () => {
    this.setState({ showEdit: !this.state.showEdit, });
  }

  render() {
    const { back, front, remove, id, } = this.props
    return(
      <div key={id}>
        <div className="card" onClick={this.toggleSide}>
          {
            this.state.showEdit ? 
              <CardForm 
                card={this.props}
                edit={this.props.editCard}
                toggleEdit={this.toggleEdit}
              /> 
            :
              (this.state.showFront ? front : back)
          }
        </div>
        <button onClick={this.toggleEdit}>Edit</button>
        <button onClick={() => remove(id)}>Delete</button>
      </div>
    );
  };
};

export default Card;