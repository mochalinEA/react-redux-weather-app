import React from 'react';
import './Layout.css';

class Layout extends React.PureComponent {
  render() {
    return (
      <div className="Layout">
        <div className="Layout__wrapper">
          <div className="Layout__container">
            <div className="Layout__content">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
