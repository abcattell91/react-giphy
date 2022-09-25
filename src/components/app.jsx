import React, { Component } from 'react';
import Search_bar from './search_bar';
import Gif from './Gif';
import GifList from './gif_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "Qv7y2Tl4ki7Ru"
    }
  }

  search = (query) => {
    // TODO: APICall
  }


  render () {
    const gifs = [
      { id: 'Qv7y2Tl4ki7Ru' },
      { id: '9rtpurjbqiqZXbBBet' },
    ]

    return (
      <div>
        <div className="left-scene">
          <Search_bar />
          <div className="selected-gif">
          <Gif id={this.state.selectedGifId}/>
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs}/>
        </div>
      </div>
    );
  }
}

export default App;
