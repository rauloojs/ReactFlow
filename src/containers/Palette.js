import { connect } from 'react-redux'
import DroppableElementsList from '../components/DroppableElementsList'

const getDroppableElements = (droppableElements) => {
  return droppableElements;
}

const mapStateToProps = (state) => ({
  droppableElements: getDroppableElements(state.droppableElements.present)
})

const VisibleDroppableElementsList = connect(
  mapStateToProps
)(DroppableElementsList)

export default VisibleDroppableElementsList
