import { combineReducers } from 'redux';
import darkModeReducer from './darkModeReducer';

const rootReducer = combineReducers({ darkMode: darkModeReducer });

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
