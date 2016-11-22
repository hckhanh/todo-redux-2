import { combineReducers } from 'redux'
import { SET_TODO_VISIBILITY, TodoVisibility, ADD_TODO, TOOGLE_TODO } from './actions'

let id = 0

function todoVisibility(state = TodoVisibility.SHOW_ALL, action) {
  switch (action.type) {
    case SET_TODO_VISIBILITY:
      return action.visibility
    default:
      return state
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: id++,
          text: action.todo.text,
          done: false
        }
      ]
    case TOOGLE_TODO:
      return state.map(todo => {
        if (todo.id === action.id) {
          return Object.assign({}, todo, { done: !todo.done })
        }
        return todo
      })
    default:
      return state
  }
}

let reducer =  combineReducers({ todoVisibility, todos })

export default reducer
