import { ActionType } from '../action_types';

interface TurnDarkModeOn {
  type: ActionType.DARK_MODE_ON;
}

interface TurnDarkModeOff {
  type: ActionType.DARK_MODE_OFF;
}

interface TurnMenuOn {
  type: ActionType.MENU_ON;
}

interface TurnMenuOff {
  type: ActionType.MENU_OFF;
}

export type Action =
  | TurnDarkModeOn
  | TurnDarkModeOff
  | TurnMenuOn
  | TurnMenuOff;
