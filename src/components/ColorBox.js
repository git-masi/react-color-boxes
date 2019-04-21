import React from 'react';
import './ColorBox.css';

const ColorBox = props => {
  return (
    <div style={{background: `${props.color}`}} className="ColorBox"></div>
  )
}

export default ColorBox;