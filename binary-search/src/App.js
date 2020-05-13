import React from 'react';
import InputForm from './InputForm';
import BinarySearch from './BinarySearch';
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
        <InputForm />
        <BinarySearch />
      </div>
    );
  }
}

export default App;
