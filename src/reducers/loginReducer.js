import { createReducer, updateObject } from 'reducers/utils';
import Actions from 'actions/';
import initialState from './initialState';

const toggleLoginLayer = (prevLoginState, action) => updateObject(prevLoginState, {
  isLoginLayerOpen: action.payload
});

const loginReducer = createReducer(initialState, {
  [Actions.TOGGLE_LOGIN_LAYER]: toggleLoginLayer,
});

export default loginReducer;
