var React = require('react');
var Nav = require('Nav');

var Main = (props) => {
  return (
    <div>
      <div>
        <div>
          <Nav/>
          <p>Timer React App</p>
          {props.children}
        </div>
      </div>
    </div>
  );
};

module.exports = Main;
