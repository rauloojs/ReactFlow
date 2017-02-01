import undoable from 'redux-undo'


const initialState = [
  {
    id: '1',
    name: 'Q1',
    x: 300,
    y: 100
  },
  {
    id: '2',
    name: 'Q2',
    x: 300,
    y: 300
  },
  {
    id: '3',
    name: 'Q3',
    x: 300,
    y: 500
  },
];

const canvasItems = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CANVAS_ITEMS':
      return [
        ...state
      ]
    case 'ADD_CANVAS_ITEM':
      return [
        ...state,
        Object.assign({}, action.item)
      ]
    case 'UPDATE_CANVAS_ITEM_POSITION':
      return state.map(item => item.id === action.id ?
          // transform the one with a matching id
          { ...item, x: action.x, y: action.y } :
          // otherwise return original item
          item
        )
    default:
      return state
  }
}

const undoableCanvasItems = undoable(canvasItems)

export default undoableCanvasItems
