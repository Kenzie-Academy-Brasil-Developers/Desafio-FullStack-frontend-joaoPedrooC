import { IContact } from "../../../interfaces/contacts";
import { IContactTypes } from "../../../interfaces/redux";
import { CREATE_CONTACT, DELETE_CONTACT, GET_USER_CONTACTS, UPDATE_CONTACT } from "./actionTypes";

export const contactsReducer = (state: Array<IContact>, action: IContactTypes) => {
  switch (action.type) {
    case GET_USER_CONTACTS:
      return action.contacts
    case CREATE_CONTACT:
      return [...state, action.contacts ]
    case UPDATE_CONTACT:
      return state.map(contact => contact.id === action.contacts.id ? action.contacts : contact)
    case DELETE_CONTACT:
      return state.filter(contact => contact.id !== action.contacts.id)
    default:
      return []
  }
}