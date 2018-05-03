import React from 'react';
import PropTypes from 'prop-types';
import './Justifier.css';

class Justifier extends React.PureComponent {
  render() {
    return (
      <div className="Justifier">
        <div className="Justifier__first">
          {this.props.first}
        </div>
        <div className="Justifier__second">
          {this.props.second}
        </div>
      </div>
    )
  }
}

Justifier.propTypes = {
  first: PropTypes.any.isRequired,
  second: PropTypes.any.isRequired,
};

export default Justifier;
