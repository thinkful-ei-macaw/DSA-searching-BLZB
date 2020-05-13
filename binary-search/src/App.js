import React from 'react';
import InputForm from './InputForm';
import BinarySearch from './BinarySearch';
import LinearSearch from './LinearSearch';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
      value: null,
    };
  }

  setArrayAndValue(array, value) {
    return this.setState;
  }

  render() {
    return (
      <div className="App">
        <InputForm setArrayAndValue={this.setArrayAndValue} />
        <BinarySearch array={this.state.array} value={this.state.value} />
        <LinearSearch array={this.state.array} value={this.state.value} />
      </div>
    );
  }
}

export default App;
