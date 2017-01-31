import undoable from 'redux-undo'


const initialState = [
  {
    id: 1,
    name: 'Q1',
    x: 300,
    y: 100
  },
  {
    id: 2,
    name: 'Q2',
    x: 300,
    y: 300
  },
  {
    id: 3,
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
    default:
      return state
  }
}

const undoableCanvasItems = undoable(canvasItems)

export default undoableCanvasItems
