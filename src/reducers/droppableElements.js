import undoable from 'redux-undo'


const initialState = [
  {
    id: 1,
    name: 'Question',
    type: 'question'
  },
  {
    id: 2,
    name: 'Action',
    type: 'action'
  },
  {
    id: 3,
    name: 'Conditional',
    type: 'conditional'
  }
];

const droppableElements = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DROPPABLE_ELEMENTS':
      return [
        ...state
      ]
    default:
      return state
  }
}

const undoableDroppableElements = undoable(droppableElements)

export default undoableDroppableElements
