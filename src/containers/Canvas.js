import { connect } from 'react-redux';
import FlowCanvas from '../components/FlowCanvas';
import jsPlumb from 'jsplumb/dist/js/jsplumb';

const getCanvasItems = (canvasItems) => {
  return canvasItems;
};

const getCanvasUi = (canvasUi) => {
  jsPlumb.setZoom(canvasUi.zoom);

  return canvasUi;
}

const mapStateToProps = (state) => ({
  canvasItems: getCanvasItems(state.canvasItems.present),
  canvasUi: getCanvasUi(state.canvasUi)
});

const VisibleCanvasItems = connect(
  mapStateToProps
)(FlowCanvas);

export default VisibleCanvasItems;
