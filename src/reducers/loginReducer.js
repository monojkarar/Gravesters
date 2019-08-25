import { createReducer, updateObject } from 'reducers/utils';
import Actions from 'actions';
import initialState from './initialState';

const saveLoginInfo = (loginState, {payload}) => payload;

const loginReducer = createReducer(initialState.login, {
  [Actions.SAVE_LOGIN_INFO]: saveLoginInfo,
});

export default loginReducer;
