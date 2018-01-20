import React from 'react';

class Clock extends React.Component {
  constructor() {
    super();
    this.state = {
      date: new Date(),
      time: {}
    };
    console.log(this.state.date);
  }

  componentDidMount() {
    this.interval = setInterval(this.tick.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <h1>My Clock</h1>
        <div>{this.state.date.toString()}</div>
      </div>
    );
  }

  tick() {
    this.state.date = new Date();
    this.state.time["hours"] = this.state.date.getHours();
    this.state.time["mins"] = this.state.date.getMinutes();
    this.state.time["secs"] = this.state.date.getSeconds();
    if (this.state.time["secs"] < 10) {
      this.state.time["secs"] = "0{this.state.time[secs]}";
    }
    if (this.state.time["mins"] < 10) {
      this.state.time["mins"] = "0{this.state.time[mins]}";
    }
    if (this.state.time["hours"] < 10) {
      this.state.time["hours"] = "0{this.state.time[hours]}";
    }

    this.setState(this.state);
  }
}

export default Clock;
