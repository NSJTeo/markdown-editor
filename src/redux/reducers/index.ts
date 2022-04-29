import { combineReducers } from 'redux';
import darkModeReducer from './darkModeReducer';
import documentsReducer from './documentsReducer';
import menuReducer from './menuReducer';
import previewReducer from './previewReducer';
import selectedDocumentReducer from './selectedDocumentReducer';

const rootReducer = combineReducers({
  darkMode: darkModeReducer,
  menu: menuReducer,
  documents: documentsReducer,
  preview: previewReducer,
  selectedDocument: selectedDocumentReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
