import { connect } from 'react-redux';
import { addToFavorites } from '@/actions'
import CityList from '@/components/CityList/CityList'

function mapStateToProps(state) {
  return {
    items: state.current.items,
    controlText: 'add',
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleControlClick(item) {
      dispatch(addToFavorites(item));
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CityList);
