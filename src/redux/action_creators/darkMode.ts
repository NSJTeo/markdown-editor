import { ActionType } from '../action_types';

export const darkModeOn = () => {
  return {
    type: ActionType.DARK_MODE_ON,
  };
};

export const darkModeOff = () => {
  return {
    type: ActionType.DARK_MODE_OFF,
  };
};
