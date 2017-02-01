import React, { Component, PropTypes } from 'react';
import './FlowItem.css';

class FlowItem extends Component {
  render() {

    return (
      <div id={'flow-item-' + this.props.item.id} className='flow-item' style={{left: this.props.item.x, top: this.props.item.y}}>
        {this.props.name}
      </div>
    );
  }
}

FlowItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired
};

export default FlowItem;