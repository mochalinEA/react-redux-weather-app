import { connect } from 'react-redux';
import { removeFromFavorites } from '@/actions'
import CityList from '@/components/CityList/CityList'

function mapStateToProps(state) {
  return {
    items: state.favorites,
    controlText: 'remove',
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleControlClick(item) {
      dispatch(removeFromFavorites(item.id));
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CityList);
