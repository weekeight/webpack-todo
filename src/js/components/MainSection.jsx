import React from 'react';
import { TodoActions } from '../actions/TodoActions';
import { TodoItem } from './TodoItem.jsx';

const ReactPropTypes = React.PropTypes;

export let MainSection = React.createClass({
  propTypes: {
    allTodos: ReactPropTypes.object.isRequired,
    areAllComplete: ReactPropTypes.bool.isRequired
  },

  render(){
    if(Object.keys(this.props.allTodos).length < 1){
      return null;
    }
    let allTodos = this.props.allTodos;
    let todos = [];

    for(let key in allTodos){
      todos.push(<TodoItem key={key} todo={allTodos[key]} />);
    }

    return (
      <section id="main">
      <input
        id="toggle-all"
        type="checkbox"
        onChange={this._onToggleCompleteAll}
        checked={this.props.areAllComplete ? 'checked' : ''}
      />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul id="todo-list">
        {todos}
      </ul>
      </section>
    );
  },

  _onToggleCompleteAll(){
    TodoActions.toggleCompleteAll();
  }
});
