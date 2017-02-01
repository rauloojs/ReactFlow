let nextTodoId = 0

export const addCanvasItem = (item) => ({
  type: 'ADD_CANVAS_ITEM',
  item: item
})

export const updateCanvasItemPosition = (id, x, y) => ({
  type: 'UPDATE_CANVAS_ITEM_POSITION',
  id: id,
  x: x,
  y: y
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
