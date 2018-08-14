//add React dependency
import React, { Component } from 'react';
import ReactDom from 'react-dom'; //The default path is node_modules/
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar'; //Need the full path

//YouTube API Key. The API is added by npm install --save youtube-api-search
const API_KEY = 'AIzaSyBCCso8b4QCX8CDR0YOJ6dAvPGV6ij04tg'



//Use class instead of const
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] }; //videos is the property name. Its default value is an empty array.

    //(data) => is the same as function(data)
    //'surfboards' is the search keyword.
    YTSearch({key : API_KEY, term: 'surfboards'}, (data) => {
      this.setState({ videos: data});
      //this.setState({ videos: videos}); //change (data) => to (videos) =>
      //this.setState({ videos }); //This works only when key and value is the same.
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}


//Create a new component. This component should produce some html
//const is ES6 syntax. Used to declare a constant.
const App1 = () => { //() => is ES6 syntax, the same as function().
  return (
    <div>
      <SearchBar />
    </div>
  ); //This div is JSX. JSX is syntax extention to JS.
     //JSX is transpiled by WebPack and Babel to JS that
     //could be rendered by browser.
     //<SearchBar /> is an instance of SearchBar class.
}

//Take this component's generated HTML and put it on the page (int the DOM)
ReactDom.render(<App />, document.querySelector('.container'));
//NoteL App is a class; <App /> is an instance.
