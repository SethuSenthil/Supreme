import React, { Component } from 'react';

export default class LI extends React.Component {
    render() {
        let main = this.props.text.toLowerCase(),
        maink = './' + maink;
        if (main === 'by: sethu senthil') {
            maink = 'https://sethusenthil.com'
        }
      return (<a href={maink} class="navLink"><span>{main}</span><br/><br/></a>)
    }
}