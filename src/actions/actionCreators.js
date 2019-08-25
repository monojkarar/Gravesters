import Actions from 'actions';

// File containing Action Creators
const createAction = (type, payload) => {
  return {
    'type': type,
    'payload': payload,
  }
};

const loginInfoAction = payload => {
  return createAction(Actions.SAVE_LOGIN_INFO, payload);
}

export { loginInfoAction };
