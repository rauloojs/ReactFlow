import { combineReducers } from 'redux'
import droppableElements from './droppableElements'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

const flowApp = combineReducers({
	droppableElements,
	todos,
	visibilityFilter
})

export default flowApp
