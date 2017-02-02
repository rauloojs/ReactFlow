import React, { Component, PropTypes } from 'react';
import $ from 'jquery';
import Drawer from 'material-ui/Drawer';
import Slider from 'material-ui/Slider';
import './DroppableElementsList.css';
import 'jquery-ui/themes/base/core.css';
import 'jquery-ui/themes/base/theme.css';
import 'jquery-ui/themes/base/draggable.css';
import 'jquery-ui/ui/core';
import 'jquery-ui/ui/widgets/draggable';
import { setCanvasZoom } from '../actions';

const sliderStyle = {
  maxWidth: 200,
  marginLeft: 10
};

class DroppableElementsList extends Component {
  componentDidMount() {
    $(".droppable-element").draggable({
      appendTo:"body",
      stack:"body",
      zIndex: 27000,
      helper:"clone",
      drag: function(event, ui){
      },
      stop: function(e, ui){
      },
      start: function(e, ui){
         $(ui.helper).addClass("shadow");
      }
    });
  }
  handleZoomChange(component, value) {
    this.props.dispatch(setCanvasZoom(value));
  }
  render() {
    return (
      <Drawer docked={true} open={true}>
        {this.props.droppableElements.map(droppableElement =>
          <div key={droppableElement.id} className='droppable-element' data-shape={droppableElement.type} data-default-name={droppableElement.defaultName}>
            {droppableElement.name}
          </div>
        )}
        <Slider step={0.1} value={1} min={0.5} max={1} style={sliderStyle} onChange={this.handleZoomChange.bind(this)} />
      </Drawer>
    );
  }
}

DroppableElementsList.propTypes = {
  droppableElements: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    defaultName: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default DroppableElementsList;