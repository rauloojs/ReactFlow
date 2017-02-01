import React, { Component, PropTypes } from 'react';
import FlowItem from './FlowItem';
import { addCanvasItem } from '../actions';
import $ from 'jquery';
import 'jquery-ui/themes/base/core.css';
import 'jquery-ui/themes/base/theme.css';
import 'jquery-ui/ui/core';
import 'jquery-ui/ui/widgets/droppable';
const uuidV4 = require('uuid/v4');

let style = {
  width: '100%',
  height: '100vh'
};

class FlowCanvas extends Component {
  componentDidMount() {
    let dispatch = this.props.dispatch;

    $('#' + this.props.id).droppable({
      drop: function(e, ui){
        var droppedElement = ui.helper.clone();
        var newPosX = ui.offset.left;
        var newPosY = ui.offset.top;
        ui.helper.remove();
        // TODO: Add item using action
        dispatch(addCanvasItem({
          id: uuidV4(),
          x: newPosX,
          y: newPosY,
          name: 'hello'
        }))

        
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
    id: PropTypes.string.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired).isRequired,
  id: PropTypes.string.isRequired
}

export default FlowCanvas;