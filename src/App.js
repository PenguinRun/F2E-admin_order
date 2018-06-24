import React, { Component } from 'react';
import './App.css';
import './container/Home/components/css/Header.css'
import './container/Home/components/css/Content.css'

import Header from './container/Home/components/Header'
import Content from './container/Home/components/Content'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content />
      </div>
    );
  }
}

export default App;
