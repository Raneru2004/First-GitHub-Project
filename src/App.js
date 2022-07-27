import logo from './logo.svg';
import './App.css';
import Posts from './components/Posts';
import Postform from './components/Postform';
import { Provider } from 'react-redux';
import { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import store from './store';


class App extends Component {

// WE ARE GONNA BASICALLY ADD A POST TO THE POSTS THAT ARE DISPLAYED USING REDUX AND FETCH FROM POST ACTION

  render(){
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            > <Postform/>
            <hr/>
              <Posts/>
            </a>
          </header>
        </div>
      </Provider>
    );
  }
}

export default App;
