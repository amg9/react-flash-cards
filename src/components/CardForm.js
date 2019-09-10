import React from 'react';

class CardForm extends React.Component {
  state = { front: "", back: "", };

  handleSubmit = (evnt) => {
    evnt.preventDefault();
    this.props.addCardFunction(this.state);
    this.setState({ front: "", back: "", });
  };

  handleChange = (evnt) => {
    this.setState({ [evnt.target.name]: evnt.target.value, });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          label="Front"
          placeholder="Front content"
          name="front"
          value={this.state.front}
          onChange={this.handleChange}
        />
        <input
          label="Back"
          placeholder="Back content"
          name="back"
          value={this.state.back}
          onChange={this.handleChange}
        />
        <input type="submit"/>
      </form>
    );
  };
};

export default CardForm;