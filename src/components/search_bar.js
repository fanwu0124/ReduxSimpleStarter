//{Component} is to import React.Component
import React, { Component } from 'react';

//Functional component
const SearchBar1 = () => {
  return <input />;
}

//Create a SearchBar class component instead of the Functional component.
//Use class if need to add more functionalities.
class SearchBar extends React.Component {
  render() {
    return <input />;
  }
}

export default SearchBar;
