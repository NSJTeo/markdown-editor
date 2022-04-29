import { Action } from '../actions';
import { ActionType } from '../action_types';

const menuReducer = (state = false, action: Action) => {
  switch (action.type) {
    case ActionType.MENU_OFF:
      return false;
    case ActionType.MENU_ON:
      return true;
    default:
      return state;
  }
};

export default menuReducer;
