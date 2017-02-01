import React, { Component, PropTypes } from 'react';
import FlowItem from './FlowItem'
import $ from 'jquery';
import 'jquery-ui/themes/base/core.css';
import 'jquery-ui/themes/base/theme.css';
import 'jquery-ui/ui/core';
import 'jquery-ui/ui/widgets/droppable';

let style = {
  width: '100%',
  height: '100vh'
};

class FlowCanvas extends Component {
  componentDidMount() {
    $('#' + this.props.id).droppable({
      drop: function(e, ui){
        // var offset = $(this).offset();
        // var droppedElement = ui.helper.clone();
        ui.helper.remove();
        // TODO: Add item using action
      }
    });
  }
  render() {

    return (
      <div id={this.props.id} style={style}>
        {this.props.canvasItems.map(item =>
          <FlowItem key={item.id} item={item}/>
        )}
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