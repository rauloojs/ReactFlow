import React, { Component, PropTypes } from 'react';
import './FlowItem.css';

class FlowCanvas extends Component {
  render() {

    return (
      <div id={'flow-item-' + this.props.id} className='flow-item' style={{left: this.props.x, top: this.props.y}}>
        {this.props.name}
      </div>
    );
  }
}

FlowCanvas.propTypes = {
  canvasItems: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired).isRequired,
  id: PropTypes.string.isRequired
}

export default FlowCanvas;