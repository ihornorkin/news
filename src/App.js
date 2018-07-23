import React, {Component} from 'react';
import './App.css';
import ArticleList from './components/ArticleList/ArticleList.js';
import {articles} from './static/fixtures.js';
import Counter from './components/Counter/Counter';
import store from './store/index';
import { Provider } from 'react-redux';

class App extends Component {
    render() {
        return (
            <Provider store = {store}>
                <div className="App">
                    <Counter/>
                    <ArticleList/>
                </div>
            </Provider>
        );
    }
}

export default App;
