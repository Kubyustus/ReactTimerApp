var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass({
  getInitialState: function () {
    return {
      count: 0,
      timerStatus: 'stopped'
    };
  },
  componentDidUpdate: function (prevProps, PrevState) {
    if (this.state.timerStatus !== PrevState.timerStatus) {
      switch (this.state.timerStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({count: 0});
        case 'paused':
          clearInterval(this.timer)
          this.timer = undefined;
          break;
      }
    }
  },
  //componentWillUpdate: function (nextProps, nextState) {

  //},
  //componentWillMount: function () {
  //  console.log('componentWillMount');
  //},
  //componentDidMount: function () {
  //  console.log('componentDidMount');
  //},
  componentWillUnmount: function () {
    //console.log('componentDidUnmount');
    clearInterval(this.timer)
    this.timer = undefined;
  },
  startTimer: function () {
    this.timer = setInterval(() => {
      var newCount = this.state.count + 1;
      this.setState({
        count: newCount
      });
    }, 1000);
  },
  handleSetCountdown: function (seconds) {
    this.setState({
      count: seconds,
      timerStatus: 'started'
    });
  },
  handleStatusChange: function (newStatus) {
    this.setState({timerStatus: newStatus});
  },
  render: function () {
    var {count, timerStatus} = this.state;
    var renderControlArea = () => {
      return <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange}/>;
    };

    return (
      <div>
        <h1 className="page-title">Timer App</h1>
        <Clock totalSeconds={count}/>
        {renderControlArea()}
      </div>
    );
  }
});

module.exports = Timer;
