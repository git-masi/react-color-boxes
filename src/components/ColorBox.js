import React from 'react';
import './ColorBox.css';

const ColorBox = props => {
  return (
    <div
      style={{background: `${props.color}`}}
      className="ColorBox"
      id={props.id}
      onClick={props.click}
      color={props.color}>
    </div>
  )
}

export default ColorBox;