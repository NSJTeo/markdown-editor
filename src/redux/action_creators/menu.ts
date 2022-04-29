import { ActionType } from '../action_types';

export const menuOn = () => {
  return {
    type: ActionType.MENU_ON,
  };
};

export const menuOff = () => {
  return {
    type: ActionType.MENU_OFF,
  };
};
