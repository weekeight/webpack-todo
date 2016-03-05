import React from 'react';
import classNames from 'classNames';
import { TodoActions } from '../actions/TodoActions';
import { TodoTextInput } from './TodoTextInput.jsx';

const ReactPropTypes = React.PropTypes;

export let TodoItem = React.createClass({
  propsType: {
    todo: ReactPropTypes.object.isRequired
  },

  getInitialState(){
    return {
      isEditing: false
    }
  },

  render(){
    let todo = this.props.todo;
    let input;

    if(this.state.isEditing){
      input =<TodoTextInput
        className="edit"
        onSave={this._onSave}
        value={todo.text}
      />;
    }

    return (
      <li
        className={classNames({
          'completed': todo.complete,
          'editing': this.state.isEditing
        })}
        key={todo.id}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={todo.complete}
            onChange={this._onToggleComplete}
          />
          <label onDoubleClick={this._onDoubleClick}>
            {todo.text}
          </label>
          <button className="destroy" onClick={this._onDestroyClick} />
        </div>
        {input}
      </li>
    );
  },

  _onToggleComplete: function() {
    TodoActions.toggleComplete(this.props.todo);
  },

  _onDoubleClick: function() {
    this.setState({isEditing: true});
  },

  _onSave: function(text) {
    TodoActions.updateText(this.props.todo.id, text);
    this.setState({isEditing: false});
  },

  _onDestroyClick: function() {
    TodoActions.destroy(this.props.todo.id);
  }
});
