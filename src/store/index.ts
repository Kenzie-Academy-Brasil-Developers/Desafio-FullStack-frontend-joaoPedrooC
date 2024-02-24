import { applyMiddleware, combineReducers, createStore } from 'redux';
import { thunk } from 'redux-thunk';
import { userReducer } from './modules/User/reducer';
import { contactsReducer } from './modules/Contacts/reducer';

const reducers = combineReducers<any>({ user: userReducer, contacts: contactsReducer });

export const store = createStore(reducers, applyMiddleware(thunk));