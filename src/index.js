//add React dependency
import React from 'react';
import ReactDom from 'react-dom'; //The default path is node_modules/

import SearchBar from './components/search_bar'; //Need the full path

//YouTube API Key. The API is added by npm install --save youtube-api-search
const API_KEY = 'AIzaSyBCCso8b4QCX8CDR0YOJ6dAvPGV6ij04tg'

//Create a new component. This component should produce some html
//const is ES6 syntax. Used to declare a constant.
const App = function() {
  return (
    <div>
      <SearchBar />
    </div>
  ); //This div is JSX. JSX is sytax extention to JS.
     //JSX is translated by WebPack and Babel to JS that
     //could be rendered by browser.
}

//() => is ES6 syntax, the same as function().
const App1 = () => {
  return <div>Hi!!</div>;
}

//Take this component's generated HTML and put it on the page (int the DOM)
ReactDom.render(<App />, document.querySelector('.container'));
//NoteL App is a class; <App /> is an instance.
