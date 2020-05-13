import React from 'react';
import SearchService from './SearchService';

class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      data: [],
      attempts: 0,
    };
  }

  binarySearch = (data, num, start = 0, end, attempts = 0) => {
    console.log(start, end);
    if (start > end) {
      this.attempts = attempts;
      return alert('value is less than 0!');
    }
    let idx = Math.floor((start + end) / 2);
    let item = data[idx];
    if (item === num) {
      alert(`value is ${idx} and it took ${this.attempts}`);
    } else if (item < num) {
      return this.binarySearch(data, num, idx + 1, end, attempts++);
    } else if (item > num) {
      return this.binarySearch(data, num, start, idx - 1, attempts++);
    }
    this.setState({
      attempts: attempts,
    });
    return attempts;
  };

  submitInput = (e) => {
    e.preventDefault();
    let input = parseInt(e.target['input'].value);
    let nums = e.target.nums.value.split(' ');
    console.log(nums);
    nums = nums.map((x) => parseInt(x));
    console.log(nums);
    let data = nums.sort((a, b) => (a > b ? 1 : -1));
    console.log(data);
    if (this.binarySearch(data, input, 0, data.length) < 0) {
      alert(`number not found; searched ${this.attempts}`);
    } else {
      this.setState({
        input,
        ...data,
      });
    }
  };

  render() {
    return (
      <form name="input" onSubmit={this.submitInput}>
        <label htmlFor="input-field">Add search input here</label>
        <textarea name="nums" id="input-field" />
        <label htmlFor="value">Value to search for</label>
        <input name="input" type="text" id="value" />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default InputForm;
