import React, { Component, Fragment } from 'react';
import './ColorBoxes.css';
import ColorBox from './ColorBox';
  
class ColorBoxes extends Component {
  constructor() {
    super();
    this.state = {
      baseColors: ['hsl(158, 55%, 78%)', 'hsl(83, 55%, 84%)', '	hsl(24, 100%, 86%)', 'hsl(3, 100%, 82%)', 'hsl(355, 100%, 77%)'],
      numBoxes: 16,
      boxes: []
    }
    this.randomColor = this.randomColor.bind(this);
    this.initBoxes = this.initBoxes.bind(this);
    this.makeBoxes = this.makeBoxes.bind(this);
    this.renderBoxes = this.renderBoxes.bind(this);
  }

  initBoxes = function() {
    const oldState = {...this.state};
    for (let i = 0; i < this.state.numBoxes; i++) {
      oldState.boxes.push({color: `${this.randomColor()}`, id: (Math.floor(Math.random() * 1000)), key: `box${(Math.floor(Math.random() * 1000))}`})
    }
  }

  randomColor = function() {
    return this.state.baseColors[(Math.floor(Math.random() * this.state.baseColors.length))];
  }

  randomizeArr = function(arr) {
    let output = [];
    while (output.length < arr.length) {
      let index = arr[Math.floor(Math.random() * arr.length)];
      if (output.indexOf(index) === -1) output.push(index);
    }
    return output;
  }
  
  makeBoxes = function() {

    const boxesJSXArr = this.state.boxes.map(el => {
      return <ColorBox color={el.color} id={el.id} key={el.key}/>
    })
    return (
      <Fragment>
        {boxesJSXArr}
      </Fragment>
    )
  }

  renderBoxes = function() {
    if (this.state.boxes.length === 0) this.initBoxes();
    const newBoxes = this.makeBoxes();
    return newBoxes;
  }

  render() {
    return (
      <div className="ColorBoxes">
        {/* {this.initBoxes()} */}
        {/* {this.makeBoxes()} */}
        {this.renderBoxes()}
      </div>
    )
  }
}

export default ColorBoxes;