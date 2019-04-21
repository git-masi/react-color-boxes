import React, { Component } from 'react';
import './ColorBoxes.css';
import ColorBox from './ColorBox';
  
class ColorBoxes extends Component {
  render() {
    return (
      <div>
        <ColorBox color="pink"/>
      </div>
    )
  }
}

export default ColorBoxes;