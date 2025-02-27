import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderBall: false,
      posi: 0,
      ballPosition: { left: "0px" },
    };
    this.renderChoice = this.renderBallOrButton.bind(this);
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
    this.handleArrowRight = this.handleArrowRight.bind(this);
  }

  buttonClickHandler() {
    this.setState({ renderBall: true });
  }
  
  renderBallOrButton() {
    if (this.state.renderBall) {
      return <div className="ball" style={this.state.ballPosition}></div>;
    } else {
      return <button className="start" onClick={this.buttonClickHandler}>Start</button>;
    }
  }

  handleArrowRight(event){
    if (event.key === "ArrowRight" || event.keyCode === 39) {
      const currentLeft = parseInt(this.state.ballPosition.left);

      const newLeft = currentLeft + 5;

      this.setState({
        ballPosition: { left : `${newLeft}px` },
      });
    }
  };

  // bind ArrowRight keydown event
  componentDidMount() {
    document.addEventListener("keydown", this.handleArrowRight);
  }

  render() {
    return <div className="playground">{this.renderBallOrButton()}</div>;
  }
}

export default App;
