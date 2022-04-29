import { combineReducers } from 'redux';
import darkModeReducer from './darkModeReducer';
import documentsReducer from './documentsReducer';
import menuReducer from './menuReducer';
import previewReducer from './previewReducer';

const rootReducer = combineReducers({
  darkMode: darkModeReducer,
  menu: menuReducer,
  documents: documentsReducer,
  preview: previewReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
