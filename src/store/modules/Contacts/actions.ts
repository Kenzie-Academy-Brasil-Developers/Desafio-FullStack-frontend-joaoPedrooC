import { IContact } from "../../../interfaces/contacts";
import { CREATE_CONTACT, GET_USER_CONTACTS } from "./actionTypes";

export const getUserContacts = (userContacts: Array<IContact>) => {
  return {
    type: GET_USER_CONTACTS,
    contacts: userContacts
  }
}

export const createContact = (newContact: IContact) => {
  return {
    type: CREATE_CONTACT,
    contacts: newContact
  }
}