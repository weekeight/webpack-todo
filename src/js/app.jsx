import React from 'react';
import ReactDOM from 'react-dom';

require('../less/app.less');

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
      <footer id="info">
        <p>Double-click to edit a todo</p>
        <p>Created by <a href="http://facebook.com/bill.fisher.771">Bill Fisher</a></p>
        <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
      </footer>
    );
  }
});

ReactDOM.render(<Container />, document.getElementById('container'));
