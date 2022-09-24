import React, { Component } from 'react';

class Gif extends Component {
  render() {
    const src = "https://media0.giphy.com/media/1YeNJK6FptDdq1q59K/200.webp?cid=ecf05e47wz5o75xhr7z1qq42hfihean60myezoa4h2afgbkx&rid=200.webp&ct=g.gif";
    return (
      <img src={src} className="gif" />
    );
  }
}

export default Gif;
