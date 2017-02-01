import { connect } from 'react-redux';
import FlowCanvas from '../components/FlowCanvas';

const getCanvasItems = (canvasItems) => {
  return canvasItems;
};

const mapStateToProps = (state) => ({
  canvasItems: getCanvasItems(state.canvasItems.present)
});

const VisibleCanvasItems = connect(
  mapStateToProps
)(FlowCanvas);

export default VisibleCanvasItems;
