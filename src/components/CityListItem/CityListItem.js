import React from 'react';
import PropTypes from 'prop-types';
import './CityListItem.css';
import Justifier from '@/components/Justifier/Justifier';
import Button from '@/components/Button/Button';
import CityCard from '@/components/CityCard/CityCard';
import Loader from '@/components/Loader/Loader';

class CityListItem extends React.PureComponent {
  render() {
    return (
      <li className="CityListItem">
        <Justifier
          first={<CityCard item={this.props.item}/>}
          second={<Button handleClick={this.props.handleControlClick}>{this.props.controlText}</Button>}
        />

        {this.props.item.isLoading && <Loader />}
      </li>
    )
  }
}

CityListItem.propTypes = {
  item: PropTypes.object,
  handleControlClick: PropTypes.func,
  controlText: PropTypes.string,
};

export default CityListItem;
