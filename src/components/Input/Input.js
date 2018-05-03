import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

class Input extends React.PureComponent {
  render() {
    return (
      <input
        autoFocus={this.props.autoFocus}
        className="Input"
        type="text"
        value={this.props.value}
        name={this.props.name}
        onChange={this.props.handleChange}
      />
    );
  }
}

Input.propTypes = {
  autoFocus: PropTypes.bool,
  index: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  handleChange: PropTypes.func,
};

export default Input;
