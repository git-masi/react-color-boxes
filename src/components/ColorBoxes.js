import React, { Component } from 'react';
import './ColorBoxes.css';
import ColorBox from './ColorBox';
  
class ColorBoxes extends Component {

  render() {
    return (
      <div>
        <ColorBox color="hsl(158, 55%, 78%)"/>
      </div>
    )
  }
}

export default ColorBoxes;