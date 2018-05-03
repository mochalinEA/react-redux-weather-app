import { connect } from 'react-redux';
import { updateSearch, search } from '@/actions';
import SearchForm from '@/components/SearchForm/SearchForm';

function mapStateToProps(state) {
  return {
    autoFocus: true,
    value: state.search.value,
    isLoading: state.search.isLoading,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleChange(event) {
      dispatch(updateSearch(event.target.value));
    },

    handleSubmit(query, event) {
      event.preventDefault();

      const message = query.trim();

      if (message.length > 0) {
        dispatch(search(query));
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
