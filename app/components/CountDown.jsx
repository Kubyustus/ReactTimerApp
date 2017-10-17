var React = require('react');
var Clock = require('Clock');

var CountDown = (props) => {
  return (
    <div>
      <Clock totalSeconds={129}/>
    </div>
  )
};

module.exports = CountDown;
