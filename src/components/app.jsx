import React, { Component } from 'react';
import Search_bar from './search_bar';
import Gif from './Gif';

class App extends Component {
  render () {
    return (
      <div>
        <div className="left-scene">
          <Search_bar />
          <div className="selected-gif">
          <Gif />
          </div>
        </div>
        <div className="right-scene"></div>
      </div>
    );
  }
}

export default App;
