// https://redux.js.org/recipes/structuring-reducers/refactoring-reducer-example

function updateObject(oldObject, newValues) {
  return Object.assign({}, oldObject, newValues)
}

function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state
    }
  }
}

export { createReducer, updateObject };
