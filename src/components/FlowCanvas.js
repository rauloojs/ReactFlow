import React, { Component, PropTypes } from 'react';
import FlowItem from './FlowItem';
import { addCanvasItem } from '../actions';
import $ from 'jquery';
import 'jquery-ui/themes/base/core.css';
import 'jquery-ui/themes/base/theme.css';
import 'jquery-ui/ui/core';
import 'jquery-ui/ui/widgets/droppable';
const uuidV4 = require('uuid/v4');
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/save';

const style = {
  width: '100%',
  height: '100vh'
};

const fabStyle = {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
};

class FlowCanvas extends Component {
  componentWillUnmount() {
    // TODO: Shoud I unbind jquery stuff?
  }
  componentDidMount() {
    let dispatch = this.props.dispatch;

    $('#' + this.props.id).droppable({
      drop: function(e, ui){
        let droppedElement = ui.helper.clone();
        let shape = droppedElement[0].dataset.shape;

        switch (shape) {
          case 'question':
          case 'action':
            var newPosX = ui.offset.left;
            var newPosY = ui.offset.top;
            ui.helper.remove();
            let uuid = uuidV4();
            dispatch(addCanvasItem({
              id: uuid,
              x: newPosX,
              y: newPosY,
              type: shape,
              name: 'hello'
            }))
            break;
          default:
            break;
        }
      }
    });
  }
  render() {

    return (
      <div>
        <div id={this.props.id} style={style}>
          {this.props.canvasItems.map(item =>
            <FlowItem key={item.id} item={item}/>
          )}
        </div>
        <FloatingActionButton style={fabStyle}>
          <ContentAdd />
        </FloatingActionButton>
      </div>
    );
  }
}

FlowCanvas.propTypes = {
  canvasItems: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  }).isRequired).isRequired,
  id: PropTypes.string.isRequired
}

export default FlowCanvas;