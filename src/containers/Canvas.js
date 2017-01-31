import { connect } from 'react-redux'
import FlowCanvas from '../components/FlowCanvas'

const getItems = (canvasItems) => {
  return canvasItems;
}

const mapStateToProps = (state) => ({
  canvasItems: getItems(state.canvasItems.present)
})

const VisibleCanvasItems = connect(
  mapStateToProps
)(FlowCanvas)

export default VisibleCanvasItems
