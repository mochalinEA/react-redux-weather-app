import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

class Button extends React.PureComponent {
  render() {
    return (
      <button
        className="Button"
        type="submit"
        onClick={this.props.handleClick}
      >
        {this.props.children}
      </button>
    )
  }
}

Button.propTypes = {
  index: PropTypes.string,
  handleClick: PropTypes.func,
};

export default Button;
