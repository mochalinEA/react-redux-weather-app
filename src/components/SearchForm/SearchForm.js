import React from 'react';
import PropTypes from 'prop-types';
import './SearchForm.css';
import Justifier from '@/components/Justifier/Justifier';
import Button from '@/components/Button/Button'
import Input from '@/components/Input/Input'
import Loader from '@/components/Loader/Loader';

class SearchForm extends React.PureComponent {
  render() {
    return (
      <form className="SearchForm" onSubmit={this.props.handleSubmit.bind(null, this.props.value)}>
        <Justifier
          first={
            <Input
              autoFocus={this.props.autoFocus}
              value={this.props.value}
              handleChange={this.props.handleChange}
            />
          }
          second={<Button index="10">Search</Button>}
        />

        {this.props.isLoading && <Loader />}
      </form>
    );
  }
}

SearchForm.propTypes = {
  autoFocus: PropTypes.bool,
  value: PropTypes.string,
  isLoading: PropTypes.bool,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
};

export default SearchForm;
