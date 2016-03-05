require('../less/app.less');

import React from 'react';
import ReactDOM from 'react-dom';

let TodoApp = React.createClass({
  render(){
    return <h1>todoapp by weekeight...</h1>
  }
});

let Container = React.createClass({
  render(){
    return (
      <section id="todoapp">
        <TodoApp />
      </section>

    );
  }
});

ReactDOM.render(<Container />, document.getElementById('container'));
