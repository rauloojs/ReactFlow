let nextTodoId = 0

export const addCanvasItem = (item) => ({
  type: 'ADD_CANVAS_ITEM',
  item
})

export const updateCanvasItemPosition = (id, x, y) => ({
  type: 'UPDATE_CANVAS_ITEM_POSITION',
  id,
  x,
  y
})

export const setCanvasZoom = (zoom) => ({
  type: 'SET_CANVAS_ZOOM',
  zoom
})

export const setCanvasDialogOpen = (dialogOpen) => ({
  type: 'SET_CANVAS_DIALOG_OPEN',
  dialogOpen
})

export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})
