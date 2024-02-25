import { IContact } from "../../../interfaces/contacts";
import { CREATE_CONTACT, DELETE_CONTACT, GET_USER_CONTACTS, UPDATE_CONTACT } from "./actionTypes";

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

export const updateContact = (updatedContact: IContact) => {
  return {
    type: UPDATE_CONTACT,
    contacts: updatedContact
  }
}

export const deleteContact = (deletedContact: IContact) => {
  return {
    type: DELETE_CONTACT,
    contacts: deletedContact
  }
}