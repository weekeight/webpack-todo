require('../less/app.less');

import React from 'react';
import ReactDOM from 'react-dom';

let TodoApp = React.createClass({
  render(){
    return <h1>todoapp by benfchen...</h1>
  }
});

let Container = React.createClass({
  render(){
    return (
      <div>
      <section id="todoapp">
        <TodoApp />
      </section>
      <footer id="info">
        <p>Double-click to edit a todo</p>
        <p>Created by <a href="https://github.com/weekeight">weekeight</a></p>
        <p>Based on <a href="http://facebook.com/bill.fisher.771">Bill Fisher's TodoMVC</a></p>
      </footer>
      </div>
    );
  }
});

ReactDOM.render(<Container />, document.getElementById('container'));
