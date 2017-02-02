import undoable from 'redux-undo'


const initialState = [];
//   {
//     id: 'a2c7aa54-8ac5-4208-b7cd-d79dfd253e4f',
//     name: 'Q1',
//     type: 'Question',
//     x: 983,
//     y: 164
//   },
//   {
//     id: 'd47590ed-cb80-4d9e-8c37-fc454ba2c1cf',
//     name: 'Q2',
//     type: 'Question',
//     x: 603,
//     y: 161
//   },
//   {
//     id: '467aa1e2-da1c-4122-bc10-4cb21ae5cc42',
//     name: 'Q3',
//     type: 'Question',
//     x: 684,
//     y: 417
//   },
// ];

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
