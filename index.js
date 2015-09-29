var React = require('react');

var TestBug = React.createClass({

  getInitialState: function() {
    return {
      test: 'hi',
    };
  },

  componentWillMount: function() {
    setTimeout(function() {
      this.setState({ test: 'bye'});
    }.bind(this), 0);
  },

  render: function() {
    return React.createElement('div', {}, this.state.test);
  },

});

var output = React.renderToString(React.createElement(TestBug, {}));
console.log('output', output);
