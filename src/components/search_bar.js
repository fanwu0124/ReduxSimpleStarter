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
    //return <input onChange = {this.onInputChange} />; //A separate event handler
    return <input onChange = {event => console.log(event.target.value)} />;
  }

  //A separate Event Handler
  //onInputChange(event) {
    //console.log(event.target.value);
  //}
}

export default SearchBar;
