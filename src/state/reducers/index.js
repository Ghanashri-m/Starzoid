import { combineReducers } from 'redux';
import starzoidReducer from './starzoidReducer';

const reducers = combineReducers({
  starzoid: starzoidReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT_SUCCESS') {
    return reducers(undefined, action);
  }

  return reducers(state, action);
};
export default rootReducer;
