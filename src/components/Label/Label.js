import React from 'react';
import './Label.css';

class Label extends React.PureComponent {
  render() {
    return (
      <div className="Label">
        {this.props.children}
      </div>
    )
  }
}

export default Label;
