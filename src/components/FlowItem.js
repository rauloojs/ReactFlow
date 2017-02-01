import React, { Component, PropTypes } from 'react';
import './FlowItem.css';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class FlowItem extends Component {
  render() {

    return (
      <div id={'flow-item-' + this.props.item.id} className='flow-item' style={{left: this.props.item.x, top: this.props.item.y}}>
        <Card>
          <CardHeader
            title="Without Avatar"
            subtitle={this.props.item.name}
            actAsExpander={true}
            showExpandableButton={true}
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
    name: PropTypes.string.isRequired
  }).isRequired
};

export default FlowItem;