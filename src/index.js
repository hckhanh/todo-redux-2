import { createStore } from 'redux'
import reducer from './reducers'
import { addTodo, toogleTodo, setTodoVisibility, TodoVisibility } from './actions'

let store = createStore(reducer)

// Log the initial state
console.log(store.getState())

// Log the change from the state every time it changes
let unsubscribe = store.subscribe(() => console.log(store.getState()))

store.dispatch(addTodo({ text: 'demo' }))
store.dispatch(toogleTodo(0))
store.dispatch(setTodoVisibility(TodoVisibility.SHOW_DONE))

unsubscribe()
