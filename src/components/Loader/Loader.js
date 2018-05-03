import React from 'react';
import './Loader.css';
import Spinner from '@/components/Spinner/Spinner';

class Loader extends React.PureComponent {
  render() {
    return (
      <div className="Loader">
        <span className="Loader__overlay" />
        <div className="Loader__spinner">
          <Spinner />
        </div>
      </div>
    )
  }
}

export default Loader;
