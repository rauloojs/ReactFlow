import React, { Component, PropTypes } from 'react';
import FlowItem from './FlowItem';
import { addCanvasItem, setCanvasDialogOpen, updateCanvasItemNext } from '../actions';
import $ from 'jquery';
import 'jquery-ui/themes/base/core.css';
import 'jquery-ui/themes/base/theme.css';
import 'jquery-ui/ui/core';
import 'jquery-ui/ui/widgets/droppable';
const uuidV4 = require('uuid/v4');
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import ContentAdd from 'material-ui/svg-icons/content/save';
import jsPlumb from 'jsplumb/dist/js/jsplumb';

const canvasStyle = {
  width: '3000px',
  height: '3000px',
  transformOrigin: "0 0",
  position: "absolute",
  background: '#eee'
};

const canvasContainerStyle = {
  width: '100wh',
  height: '100vh',
  marginLeft: "256px",
  overflow: "auto"
};

const fabStyle = {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
};

const getUUIDFromItemId = (id) => {
  return id.split('flow-item-').pop();
};


class FlowCanvas extends Component {
  openDialogHandler() {
    this.props.dispatch(setCanvasDialogOpen(true));
  }
  handleOpen = () => {
    this.props.dispatch(setCanvasDialogOpen(true))
  }
  handleClose = () => {
    this.props.dispatch(setCanvasDialogOpen(false))
  }
  componentWillUnmount() {
    // TODO: Shoud I unbind jquery stuff?
  }
  componentDidMount() {
    let dispatch = this.props.dispatch;
    let component = this;

    $('#' + this.props.id).droppable({
      drop: function(e, ui){
        let droppedElement = ui.helper.clone();
        let shape = droppedElement[0].dataset.shape;
        let name = droppedElement[0].dataset.defaultName;

        switch (shape) {
          case 'question':
          case 'action':
            var newPosX = (ui.offset.left - 256) / (component.props.canvasUi.zoom);
            var newPosY = ui.offset.top / (component.props.canvasUi.zoom);
            ui.helper.remove();
            let uuid = uuidV4();
            dispatch(addCanvasItem({
              id: uuid,
              x: newPosX,
              y: newPosY,
              type: shape,
              name: name
            }))
            break;
          default:
            break;
        }
      }
    });
    jsPlumb.setContainer(this.props.id);
    jsPlumb.bind('connection', function(info) {
      let id = getUUIDFromItemId(info.sourceId);
      let next = getUUIDFromItemId(info.targetId);
      component.props.dispatch(updateCanvasItemNext(id, next));
    });
  }
  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div style={canvasContainerStyle}>
        <div id={this.props.id} style={Object.assign({}, canvasStyle, {transform: 'scale('+ this.props.canvasUi.zoom +')'})}>
          {this.props.canvasItems.map(item =>
            <FlowItem key={item.id} item={item} openDialogHandler={this.openDialogHandler.bind(this)}/>
          )}
        </div>
        <Dialog
          title="Dialog With Actions"
          actions={actions}
          modal={false}
          open={this.props.canvasUi.dialogOpen}
          onRequestClose={this.handleClose}
        >
          The actions in this window were passed in as an array of React objects.
        </Dialog>
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
    type: PropTypes.string.isRequired,
    next: PropTypes.string
  }).isRequired).isRequired,
  id: PropTypes.string.isRequired
}

export default FlowCanvas;