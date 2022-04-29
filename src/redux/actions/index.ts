import { ActionType } from '../action_types';

interface TurnDarkModeOn {
  type: ActionType.DARK_MODE_ON;
}

interface TurnDarkModeOff {
  type: ActionType.DARK_MODE_OFF;
}

export type Action = TurnDarkModeOn | TurnDarkModeOff;
