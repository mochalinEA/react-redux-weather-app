import React from 'react';
import './Widget.css';
import Label from '@/components/Label/Label'

class Widget extends React.PureComponent {
  render() {
    return (
      <div className="Widget">
        <div className="Widget__container">
          {this.props.children}
        </div>

        {(this.props.label !== undefined) && (
          <div className="Widget__label">
            <Label>
              {this.props.label}
            </Label>
          </div>
        )}
      </div>
    )
  }
}

export default Widget;
