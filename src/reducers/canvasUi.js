const initialState = {
  zoom: 1
};

const canvasUi = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CANVAS_ZOOM':
      return Object.assign({}, state, {
        zoom: action.zoom
      })
    default:
      return state
  }
}

export default canvasUi