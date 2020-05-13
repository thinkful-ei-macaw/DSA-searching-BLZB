import React from 'react';
import SearchService from './SearchService';

class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      value: '',
    };
    this.changeInput = this.changeInput.bind(this);
    this.submitInput = this.submitInput.bind(this);
    this.changeValue = this.changeValue.bind(this);
  }

  changeInput(e) {
    const newInput = e.target.value;

    this.setState({
      input: newInput,
    });
  }

  changeValue(e) {
    const newInput = e.target.value;

    this.setState({
      value: newInput,
    });
  }

  submitInput(e) {
    e.preventDefault();
    const { input } = this.state;

    const array = SearchService.convertToArray(input);

    this.props.setArrayAndValueState(array, this.state.value);
  }

  render() {
    return (
      <form onSubmit={(e) => this.submitInput(e)}>
        <label htmlFor="input-feild">Add search input here</label>
        <textarea id="input-feild" onChange={(e) => this.changeInput(e)} />
        <label htmlFor="value">Value to search for</label>
        <input type="text" id="value" onChange={(e) => this.changeValue(e)} />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default InputForm;
