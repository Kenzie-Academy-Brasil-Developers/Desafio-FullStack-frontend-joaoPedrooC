import { IContact } from "../../../interfaces/contacts";
import { IContactTypes } from "../../../interfaces/redux";
import { CREATE_CONTACT, GET_USER_CONTACTS } from "./actionTypes";

export const contactsReducer = (state: Array<IContact>, action: IContactTypes) => {
  switch (action.type) {
    case GET_USER_CONTACTS:
      return action.contacts
    case CREATE_CONTACT:
      return [...state, action.contacts ]
    default:
      return []
  }
}