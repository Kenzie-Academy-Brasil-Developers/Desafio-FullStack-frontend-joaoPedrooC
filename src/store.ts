import { configureStore } from "@reduxjs/toolkit";
import userReducer from './features/user/user-slice'
import contactsSlice from "./features/contacts/contacts-slice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    contacts: contactsSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch