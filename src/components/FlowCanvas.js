import React, { Component, PropTypes } from 'react';
import FlowItem from './FlowItem';
import { addCanvasItem, updateCanvasItemPosition } from '../actions';
import $ from 'jquery';
import 'jquery-ui/themes/base/core.css';
import 'jquery-ui/themes/base/theme.css';
import 'jquery-ui/ui/core';
import 'jquery-ui/ui/widgets/droppable';
import jsPlumb from 'jsplumb/dist/js/jsplumb'
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

        switch(droppedElement[0].dataset.shape) {
          case 'question':
          case 'action':
            var newPosX = ui.offset.left;
            var newPosY = ui.offset.top;
            ui.helper.remove();
            // TODO: Add item using action
            let uuid = uuidV4();
            dispatch(addCanvasItem({
              id: uuid,
              x: newPosX,
              y: newPosY,
              name: 'hello'
            }))

            jsPlumb.draggable($('.flow-item'), {
              handle: '.drag-handler',
              stop: function (e) {
                let something = dispatch(updateCanvasItemPosition(uuid, e.pos[0], e.pos[1]))
                console.log(something);
              },
              containment: true
            });
            jsPlumb.addEndpoint('flow-item-' + uuid, {
                endpoint: "Dot",
                isSource: true,
                isTarget: true,
                anchor: [ "TopCenter" ],
                connectorStyle: { strokeWidth:4, stroke:'blue' }
            });
            jsPlumb.addEndpoint('flow-item-' + uuid, {
                endpoint: "Dot",
                isSource: true,
                isTarget: true,
                anchor: [ "BottomCenter" ],
                connectorStyle: { strokeWidth:4, stroke:'blue' }
            });
            break;
          default:
            break;
        }
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