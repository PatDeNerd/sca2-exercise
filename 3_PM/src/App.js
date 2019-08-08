import React, { Component } from "react"
import "./App.css"

const WinMessage = () => <div id = "msg">You Win!</div>
const LoMessage = () => <div id = "msg">Lower!</div>
const HiMessage = () => <div id = "msg">Higher!</div>

const getWin = () => {
  return this.state.win;
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      randomValue: Math.floor(Math.random() * 100),
      guess: -1,
      win: false,
      higher: false,
      lower: false,
      streak: 0
    }
  }

  updateGuess = event => {
    this.setState({ guess: Number(event.target.value) });
  }

  checkWin = event => {
    event.preventDefault();
    let prev = this.getWin();
    this.setState({win: this.state.guess === this.state.randomValue});
    this.setState({higher: this.state.guess < this.state.randomValue});
    this.setState({lower: this.state.guess > this.state.randomValue});

    if((this.state.win && prev) || this.state.win) {
      this.setState({streak: this.state.streak + 1});
    }
    else {
      this.setState({streak: 0});
    }
  }

  randomize = event => {
    event.preventDefault();
    this.setState({randomValue: Math.floor(Math.random() * 100)});
    this.setState({win: false});
    this.setState({streak: 0});
    alert("Winning # has changed.");
  }

  render() {
    return (
      <>
        <div id = "face">
          <img src="riddlerface.png" alt="The Riddler's face" />
        </div>
        
        <div className="App">
          <form>
            <label>
              Enter your guess: <br/>
              <input
                type="number"
                value={this.state.value}
                onChange={this.updateGuess}
              />
            </label>
            <input type="submit" value="Submit" onClick={this.checkWin} id="button"/>
          </form> <br/>
          <input type="button" value="New Game" onClick={this.randomize} id="button"/>
          {this.state.win && <WinMessage />}
          {this.state.higher && <HiMessage />}
          {this.state.lower && <LoMessage />}
          <line><br/></line>
          <p id = "streak"> Streak: {this.state.streak} wins </p>
        </div>
      </>
    )
  }
}

export default App
