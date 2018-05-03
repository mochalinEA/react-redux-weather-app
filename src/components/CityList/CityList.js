import React from 'react';
import PropTypes from 'prop-types';
import './CityList.css';
import CityListItem from '@/components/CityListItem/CityListItem'

class CityList extends React.PureComponent {
  renderItems() {
    return (
      this.props.items.map(item => (
        <CityListItem
          key={item.id}
          item={item}
          controlText={this.props.controlText}
          handleControlClick={this.props.handleControlClick.bind(null, item)}
        />
      ))
    )
  }

  render() {
    return (
      <ul className="CityList">
        {this.renderItems()}
      </ul>
    )
  }
}

CityList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.any.isRequired,
  })),
  controlText: PropTypes.string,
  handleControlClick: PropTypes.func,
};

export default CityList;
