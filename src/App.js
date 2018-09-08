import React, { Component } from 'react';
import './App.css';
import LI from './Components/Link/Link.js';
import Logo from './Media/logo.png';
import Head from './Components/Head/Head.js';


class App extends Component {
  render() {
    return (
      <div className="App">
             <img src ={Logo}/>
<Head></Head>
      <br/><br/><br/><br/><br/><br/><br/>
<div id="wrap">
<nav>
<ul>
  <LI text="news"/>
  <LI text="fall/winter 2018 preview"/>
  <LI text="fall/winter 2018 lookbook"/>
  <LI text="shop"/>
  <LI text="random"/>
  <LI text="about"/>
  <LI text="stores"/>
  <LI text="contact"/>
  <LI text="by: Sethu Senthil"/>
</ul>
</nav>
</div>
</div>
    );
  }
}
export default App;
