import { combineReducers } from 'redux';
import darkModeReducer from './darkModeReducer';
import menuReducer from './menuReducer';

const rootReducer = combineReducers({
  darkMode: darkModeReducer,
  menu: menuReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
