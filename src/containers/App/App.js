import React from 'react';
import { connect } from 'react-redux';
import { loadFavorites, findCurrentCity } from '@/actions';
import './App.css';
import Layout from '@/components/Layout/Layout';
import Board from '@/components/Board/Board';

class App extends React.Component {
  componentDidMount() {
    this.props.loadFavorites();
    this.props.findCurrentCity();
  }

  render() {
    return (
      <div className="App">
        <Layout>
          <Board />
        </Layout>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    favorites: state.favorites,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadFavorites() {
      dispatch(loadFavorites());
    },

    findCurrentCity() {
      dispatch(findCurrentCity());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
