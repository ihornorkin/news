import React, { Component } from 'react';
import './App.css';
import ArticleList from './components/ArticleList.js'
import {articles} from './static/fixtures.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ArticleList article = {articles} />
      </div>
    );
  }
}

export default App;
