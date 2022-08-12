import {useReducer} from 'react'

const initialTodos = [
  {
    id: 1,
    title: 'Todo 1',
    complete: false
  }, {
    id: 2,
    title: 'Todo 2',
    complete: false
  }
]

const reducer = (state, action) => {
  switch (action.type) {
    case 'COMPLETE':
      return state.map(todo => {
        if (todo.id === action.id) {
          return {
            ...todo,
            // complete: todo.complete
            // complete: !todo.complete
          }
        } else {
          return todo
        }
      })
    default:
      return state
  }
}

export const ToDo = () => {
  const [todos,
    dispatch] = useReducer(reducer, initialTodos)

  const handleComplete = todo => {
    dispatch({type: 'COMPLETE', id: todo.id})
  }

  return (
    <div className="container-fluid pt-3 pb-3">
      <div class="row">
        <div class="col">
          {todos.map(todo => (
            <div key={todo.id}>
              <label>
                {/* <input
                  type='checkbox'
                  checked={todo.complete}
                  onChange={() => handleComplete(todo)}/>{' '} {todo.title} */}
                  <input
                  type='checkbox'/>{' '} {todo.title}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}