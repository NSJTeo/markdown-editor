import { combineReducers } from 'redux';
import darkModeReducer from './darkModeReducer';
import documentsReducer from './documentsReducer';
import menuReducer from './menuReducer';

const rootReducer = combineReducers({
  darkMode: darkModeReducer,
  menu: menuReducer,
  documents: documentsReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
