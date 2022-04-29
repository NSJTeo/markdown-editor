import { Action } from '../actions';
import { ActionType } from '../action_types';

const darkModeReducer = (state = false, action: Action) => {
  switch (action.type) {
    case ActionType.DARK_MODE_ON:
      return true;
    case ActionType.DARK_MODE_OFF:
      return false;
    default:
      return state;
  }
};

export default darkModeReducer;
