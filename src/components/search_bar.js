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

    return (
      //Whenever input is changed, call onInputChange with input value as prop.
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange = {event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    //call onSearchTermChange passed from App.
    this.props.onSearchTermChange(term);
  }

  //A separate Event Handler
  //onInputChange(event) {
    //console.log(event.target.value);
  //}
}

export default SearchBar;
