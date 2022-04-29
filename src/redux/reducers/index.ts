import { combineReducers } from 'redux';
import darkModeReducer from './darkModeReducer';
import documentsReducer from './documentsReducer';
import menuReducer from './menuReducer';
import previewReducer from './previewReducer';
import selectedDocumentIdReducer from './selectedDocumentIdReducer';

const rootReducer = combineReducers({
  darkMode: darkModeReducer,
  menu: menuReducer,
  documents: documentsReducer,
  preview: previewReducer,
  selectedDocumentId: selectedDocumentIdReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
