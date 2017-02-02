import React, { Component, PropTypes } from 'react';
import './FlowItem.css';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import jsPlumb from 'jsplumb/dist/js/jsplumb';
import $ from 'jquery';
import { updateCanvasItemPosition } from '../actions';
const uuidV4 = require('uuid/v4');
import { connect } from 'react-redux';

class FlowItem extends Component {
  handleClick() {
    // TODO Repaint is not working
    jsPlumb.repaint('#flow-item-' + this.props.item.id);
  }
  componentDidMount() {
    let id = 'flow-item-'+ this.props.item.id;
    let component = this;

    $(document).ready(function () {
      jsPlumb.draggable(id, {
        handle: '.drag-handler',
        stop: function (e) {
          component.props.dispatch(updateCanvasItemPosition(component.props.item.id, e.pos[0], e.pos[1]))
        },
        containment: true
      });
      jsPlumb.addEndpoint(id, {
          uuid: uuidV4(),
          connector: [ "Bezier", { curviness:160 } ],
          endpoint: "Dot",
          isSource: false,
          isTarget: true,
          anchor: [ "TopCenter" ],
          connectorStyle: { strokeWidth:2, stroke:'#444' },
          maxConnections: -1
      });
      jsPlumb.addEndpoint(id, {
          uuid: uuidV4(),
          connector: [ "Bezier", { curviness:160 } ],
          endpoint: "Dot",
          isSource: true,
          isTarget: false,
          anchor: [ "BottomCenter" ],
          connectorStyle: { strokeWidth:2, stroke:'#444' }
      });
    });
  }
  render() {

    return (
      <div id={'flow-item-' + this.props.item.id} className='flow-item' style={{left: this.props.item.x, top: this.props.item.y}}>
        <Card>
          <CardHeader
            title={this.props.item.name}
            subtitle={this.props.item.type}
            actAsExpander={true}
            showExpandableButton={true}
            onClick={this.handleClick.bind(this)}
          />
          <CardActions>
            <div className='drag-handler' />
            <FlatButton label="Action1" />
            <FlatButton label="Action2" />
          </CardActions>
          <CardText expandable={true}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
          </CardText>
        </Card>
      </div>
    );
  }
}

FlowItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  }).isRequired
};


const mapDispatchToProps = (dispatch) => {
  return {
    updateCanvasItemPosition: () => dispatch(updateCanvasItemPosition()),
  };
};

export default connect(mapDispatchToProps)(FlowItem);