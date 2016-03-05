require('../less/app.less');

import React from 'react';
import ReactDOM from 'react-dom';
import { TodoStore } from './stores/TodoStore';

import { Header } from './components/Header.jsx';
import { MainSection } from './components/MainSection.jsx';
import { Footer } from './components/Footer.jsx';

function getTodoState(){
  return {
    allTodos: TodoStore.getAll(),
    areAllComplete: TodoStore.areAllComplete()
  };
}

let TodoApp = React.createClass({
  getInitialState(){
    return getTodoState();
  },

  render(){
    return (
      <div>
        <Header />
        <MainSection
          allTodos={this.state.allTodos}
          areAllComplete={this.state.areAllComplete}
        />
        <Footer allTodos={this.state.allTodos} />
      </div>
    );
  },

  componentDidMount(){
    TodoStore.addChangeListener(this._onChange);
  },

  componentWillUnmount(){
    TodoStore.removeChangeListener(this._onChange);
  },

  _onChange(){
    this.setState(getTodoState());
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
        <p>Based on <a href="https://github.com/facebook/flux/tree/master/examples/flux-todomvc">flux todo project</a></p>
      </footer>
      </div>
    );
  }
});

ReactDOM.render(<Container />, document.getElementById('container'));
