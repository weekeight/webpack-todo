import React from 'react';
import { TodoActions } from '../actions/TodoActions';
import {TodoTextInput} from './TodoTextInput.jsx';

export let Header = React.createClass({
  render(){
    return (
      <header id="header">
        <h1>todos</h1>
        <TodoTextInput
        className="new-todo"
        id="new-todo"
        placeholder="What need to be done?"
        onSave={this._onSave}
      />
      </header>
    );
  },

  _onSave(text){
    if(text.trim()){
      TodoActions.create(text);
    }
  }
});
