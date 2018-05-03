import React from 'react';
import './Spinner.css';

class Spinner extends React.PureComponent {
  render() {
    return (
      <div className="Spinner">
        <svg className="Spinner__container">
          <circle
            className="Spinner__path"
            cx="21"
            cy="21"
            fill="none"
            r="19"
            strokeMiterlimit="10"
            strokeWidth="3"
          />
        </svg>
      </div>
    )
  }
}

export default Spinner;
