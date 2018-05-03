import React from 'react';
import './Board.css';
import Widget from '@/components/Widget/Widget'
import Title from '@/components/Title/Title'
import FavoriteCityList from '@/containers/FavoriteCityList/FavoriteCityList'
import CurrentCityList from '@/containers/CurrentCityList/CurrentCityList'
import CitySearchForm from '@/containers/CitySearchForm/CitySearchForm'

class Board extends React.PureComponent {
  render() {
    return (
      <div className="Board">
        <Widget>
          <Title>How is weather today ?</Title>
        </Widget>

        <Widget label="Search">
          <CitySearchForm />
        </Widget>

        <Widget label="Current">
          <CurrentCityList/>
        </Widget>

        <Widget label="Favorites">
          <FavoriteCityList />
        </Widget>
      </div>
    );
  }
}

export default Board;
