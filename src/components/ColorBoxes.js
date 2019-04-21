import React, { Component } from 'react';
import './ColorBoxes.css';
import ColorBox from './ColorBox';
  
class ColorBoxes extends Component {
  constructor() {
    super();
    this.state = {
      baseColors: ['hsl(158, 55%, 78%)', 'hsl(83, 55%, 84%)', '	hsl(24, 100%, 86%)', 'hsl(3, 100%, 82%)', 'hsl(355, 100%, 77%)']
    }
    this.randomColor = this.randomColor.bind(this);
  }

  randomColor = function() {
    return this.state.baseColors[(Math.floor(Math.random() * this.state.baseColors.length))];
  }

  render() {
    return (
      <div>
        <ColorBox color={this.randomColor()}/>
        <ColorBox color={this.randomColor()}/>
        <ColorBox color={this.randomColor()}/>
        <ColorBox color={this.randomColor()}/>
      </div>
    )
  }
}

export default ColorBoxes;