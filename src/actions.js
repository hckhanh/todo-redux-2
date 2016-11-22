export const ADD_TODO = 'ADD_TODO'

export const TOOGLE_TODO = 'TOOGLE_TODO'

export const SET_TODO_VISIBILITY = 'SET_TODO_VISIBILITY'

export const TodoVisibility = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_DONE: 'SHOW_DONE',
  SHOW_UNDONE: 'SHOW_UNDONE'
}

export function addTodo(todo) {
  return { type:  ADD_TODO, todo }
}

export function toogleTodo(id) {
  return { type:  TOOGLE_TODO, id }
}

export function setTodoVisibility(visibility) {
  return { type:  SET_TODO_VISIBILITY, visibility }
}
