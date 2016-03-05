import React from 'react';

const ReactPropTypes = React.PropTypes;
const ENTER_KEY_CODE = 13;

export let TodoTextInput = React.createClass({
  propTypes: {
    id: ReactPropTypes.string,
    className: ReactPropTypes.string,
    placeholder: ReactPropTypes.string,
    onSave: ReactPropTypes.func.isRequired,
    value: ReactPropTypes.string
  },

  getInitialState(){
    return {
      value: this.props.value || ''
    }
  },

	render(){
		return (
      <input
        type="text"
        id={this.props.id}
        className={this.props.className}
        placeholder={this.props.placeholder}
        onChange={this._onChange}
        onKeyDown={this._onKeyDown}
        onBlur={this._save}
        value={this.state.value}
        autoFocus={true}
      />
		);
	},

  _onChange(ev){
    this.setState({
      value: ev.target.value
    });
  },

  _onKeyDown(ev){
    if(ev.keyCode === ENTER_KEY_CODE){
      this._save();
    }
  },

  _save(){
    this.props.onSave(this.state.value);
    this.setState({
      value: ''
    });
  }
});
