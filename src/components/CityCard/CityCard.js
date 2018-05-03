import React from 'react';
import PropTypes from 'prop-types';
import './CityCard.css';

class CityCard extends React.PureComponent {
  render() {
    return (
      <div className="CityCard">
        <div className="CityCard__name">
          {this.props.item.name}
        </div>

        <div className="CityCard__temperature">
          {this.props.item.temp}°C
        </div>
      </div>
    )
  }
}

CityCard.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    temp: PropTypes.string,
  }),
};

export default CityCard;
