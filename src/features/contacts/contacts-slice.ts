import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IContact } from "../../interfaces/contacts";

const initialState: IContact[] = []

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    getUserContacts: (state, { payload }: PayloadAction<IContact[]>) => {
      return payload
    },
    createContact: (state, { payload }: PayloadAction<IContact>) => {
      return [...state, payload]      
    },
    updateContact: (state, { payload }: PayloadAction<IContact>) => {
      return state.map(contact => contact.id !== payload.id? contact : payload)
    },
    deleteContact: (state, { payload }: PayloadAction<string>) => {
      return state.filter(contact => contact.id !== payload)
    }
  }
})

export const { getUserContacts, createContact, updateContact, deleteContact } = contactsSlice.actions
export default contactsSlice.reducer