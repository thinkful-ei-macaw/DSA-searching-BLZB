import React, { Component } from 'react';
import SearchService from './SearchService';

function LinearSearch(props) {
  const ticks = SearchService.linearSearchTicks(props.array, props.value);

  const message = props.value ? (
    <div>
      <h2>Linear Search Ticks</h2>
      <p>{ticks}</p>
    </div>
  ) : (
    ''
  );

  return <div>{message}</div>;
}

export default LinearSearch;
