import createReducer from 'reducers/createReducer';
import initialState from './initialState';

// Combines all reducers to a single reducer function
const rootReducer = createReducer(initialState.isLoginLayerOpen, (state, action) => {
  return state;
})

export default rootReducer;
