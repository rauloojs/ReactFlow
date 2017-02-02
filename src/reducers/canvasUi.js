const initialState = {
  zoom: 1,
  dialogOpen: false
};

const canvasUi = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CANVAS_ZOOM':
      return Object.assign({}, state, {
        zoom: action.zoom
      })
	case 'SET_CANVAS_DIALOG_OPEN':
      return Object.assign({}, state, {
        dialogOpen: action.dialogOpen
      })
    default:
      return state
  }
}

export default canvasUi