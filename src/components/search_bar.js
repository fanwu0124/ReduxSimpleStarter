//{Component} is to import React.Component
import React, { Component } from 'react';

//Functional component
const SearchBar1 = () => {
  return <input />;
}

//Create a SearchBar class component instead of the Functional component.
//Use class if need to add more functionalities.
class SearchBar extends React.Component {
  constructor(props) { //Automatically called when an instance is created.
    super(props); //super is in the constructor of base class Component.

    //state is a JavaScript object used to record or react the user events.
    //Each class has its own state object.
    //Whenever the state of a component is changed, render() and its children
    //will be rerendered.
    this.state = { term: '' }; //Initialize state object
  }

  render() {
    //return <input onChange = {this.onInputChange} />; //A separate event handler

    //Whenever input is changed, assigned input value to SearchBar's state object.
    return (
      <div className="search-bar">
        <input onChange = {event => this.setState({term: event.target.value})} />
      </div>
    );
  }

  //A separate Event Handler
  //onInputChange(event) {
    //console.log(event.target.value);
  //}
}

export default SearchBar;
