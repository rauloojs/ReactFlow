import React, { Component, PropTypes } from 'react';
import $ from 'jquery';
import Drawer from 'material-ui/Drawer';
import './DroppableElementsList.css';
import 'jquery-ui/themes/base/core.css';
import 'jquery-ui/themes/base/theme.css';
import 'jquery-ui/themes/base/draggable.css';
import 'jquery-ui/ui/core';
import 'jquery-ui/ui/widgets/draggable';


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
  render() {
    return (
      <Drawer docked={true} open={true}>
        {this.props.droppableElements.map(droppableElement =>
          <div key={droppableElement.id} className='droppable-element' data-shape={droppableElement.type}>
            {droppableElement.name}
          </div>
        )}
      </Drawer>
    );
  }
}

DroppableElementsList.propTypes = {
  droppableElements: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default DroppableElementsList;