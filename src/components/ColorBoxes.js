import React, { Component, Fragment } from 'react';
import './ColorBoxes.css';
import ColorBox from './ColorBox';

class ColorBoxes extends Component {
  constructor() {
    super();
    this.state = {
      baseColors: ['hsl(158, 55%, 78%)', 'hsl(83, 55%, 84%)', 'hsl(24, 100%, 86%)', 'hsl(3, 100%, 82%)', 'hsl(355, 100%, 77%)'],
      numBoxes: 16,
      // boxes is an array of nested objects
      boxes: []
    }
    this.randomColor = this.randomColor.bind(this);
    this.initBoxes = this.initBoxes.bind(this);
    this.makeBoxes = this.makeBoxes.bind(this);
    this.renderBoxes = this.renderBoxes.bind(this);
    this.boxClickHandler = this.boxClickHandler.bind(this);
  }

  initBoxes = function() {
    const oldState = {...this.state};
    for (let i = 0; i < this.state.numBoxes; i++) {
      oldState.boxes.push({color: `${this.randomColor()}`, id: (Math.floor(Math.random() * 10000)), key: `box${(Math.floor(Math.random() * 10000))}`})
    }
  }

  randomColor = function() {
    return this.state.baseColors[(Math.floor(Math.random() * this.state.baseColors.length))];
  }
  
  makeBoxes = function() {
    const boxesJSXArr = this.state.boxes.map(el => {
      return <ColorBox color={el.color} id={el.id} key={el.key} click={this.boxClickHandler}/>
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

  boxClickHandler = function (e) {
    let targetID = Number(e.target.id);
    let updateState = [...this.state.boxes];
    for (let box of updateState) {
      if (box.id === targetID) {
        let newColor = this.randomColor();
        while (newColor === box.color) {
          newColor = this.randomColor();
        }
        box.color = newColor;
      }
    }
    this.setState({boxes: updateState})
  }

  render() {
    return (
      <div className="ColorBoxes">
        {this.renderBoxes()}
      </div>
    )
  }
}

export default ColorBoxes;