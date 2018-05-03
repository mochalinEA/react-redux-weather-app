import React from 'react';
import './Title.css';

class Title extends React.PureComponent {
  render() {
    return (
      <span className="Title">
        {this.props.children}
      </span>
    );
  }
}

export default Title;
