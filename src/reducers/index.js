import { combineReducers } from 'redux';
import loginReducer from 'reducers/loginReducer';


// Combines all reducers to a single reducer function
const rootReducer = combineReducers({
  login: loginReducer,
});

export default rootReducer;
