import { combineReducers } from 'redux'
import canvasItems from './canvasItems'
import canvasUi from './canvasUi'
import droppableElements from './droppableElements'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

const flowApp = combineReducers({
	droppableElements,
	todos,
	visibilityFilter,
	canvasItems,
	canvasUi
})

export default flowApp
