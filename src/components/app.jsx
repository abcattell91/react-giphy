import React, { Component } from 'react';
import Search_bar from './search_bar';

class App extends Component {
  render () {
    return (
      <div>
        <div className="left-scene">
          <Search_bar />
        </div>
        <div className="right-scene"></div>
      </div>
    );
  }
}

export default App;
