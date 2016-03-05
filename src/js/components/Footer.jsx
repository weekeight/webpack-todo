import React from 'react';
import { TodoActions } from '../actions/TodoActions';

const ReactPropTypes = React.PropTypes;

export let Footer = React.createClass({
  propTypes: {
    allTodos: ReactPropTypes.object.isRequired
  },

  render(){
    let allTodos = this.props.allTodos;
    let total = Object.keys(allTodos).length;

    if(total === 0){
      return null;
    }

    let completed = 0;
    for(let key in allTodos){
      if(allTodos[key].complete){
        completed++;
      }
    }

    let clearCompletedButton;
    if(completed){
      clearCompletedButton = <button
        id="clear-completed"
        onClick={this._onClearCompletedClick}>
        Clear completed ({completed})
      </button>;
    }

    return (
      <footer id="footer">
        <span id="todo-count">
          <strong>
            {total - completed}
          </strong>
          {(total - completed) <= 1 ? '  item left' : '  items left'}
        </span>
        {clearCompletedButton}
      </footer>
    );
  },

  _onClearCompletedClick(){
    TodoActions.destroyCompleted();
  }
});
