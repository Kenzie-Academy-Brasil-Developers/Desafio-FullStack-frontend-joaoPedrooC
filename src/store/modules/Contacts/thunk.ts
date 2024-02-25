import { Dispatch } from "redux";
import { IContact, ICreateContact } from "../../../interfaces/contacts";
import { api } from "../../../services/api";
import { createContact, deleteContact, updateContact } from "./actions";
import Swal from "sweetalert2";

export const createContactThunk = (contactInfo: ICreateContact) => async (dispatch: Dispatch) => {
  try {
    const userToken = localStorage.getItem('@contacts:token')

    const { data } = await api.post<IContact>('/contacts', contactInfo, {
      headers: {
        Authorization: `Bearer ${userToken}`
      }
    })
    
    Swal.fire({
      title: 'Contato adicionado com sucesso!',
      text: `O contato ${contactInfo.name} foi adicionado à sua lista de contatos`,
      icon: 'success',
      customClass: 'toast__container'
    })
    dispatch(createContact(data))
  } catch (error) {
    console.log(error);
    
    Swal.fire({
      title: 'Oops, algo deu errado!',
      text: 'Tente novamente mais tarde',
      icon: 'error',
      customClass: 'toast__container'
    })
  }
}

export const updateContactThunk = (contactInfo: ICreateContact, contactId: string) => async (dispatch: Dispatch) => {
  try {
    const userToken = localStorage.getItem('@contacts:token')

    const { data } = await api.patch<IContact>(`/contacts/${contactId}`, contactInfo, {
      headers: {
        Authorization: `Bearer ${userToken}`
      }
    })
    
    Swal.fire({
      title: 'Contato atualizado com sucesso!',
      text: `O contato ${contactInfo.name} foi atualizado, você já consegue visualizar as alterações em sua lista de contatos`,
      icon: 'success',
      customClass: 'toast__container'
    })
    dispatch(updateContact(data))
  } catch (error) {
    console.log(error);
    
    Swal.fire({
      title: 'Oops, algo deu errado!',
      text: 'Tente novamente mais tarde',
      icon: 'error',
      customClass: 'toast__container'
    })
  }
}

export const deleteContactThunk = (deletingContact: IContact) => async (dispatch: Dispatch) => {
  try {
    const userToken = localStorage.getItem('@contacts:token')

    await api.delete<IContact>(`/contacts/${deletingContact.id}`, {
      headers: {
        Authorization: `Bearer ${userToken}`
      }
    })
    
    Swal.fire({
      title: 'Contato deletado com sucesso!',
      text: 'O contato foi deletado com sucesso, você não o verá mais em sua lista de contatos',
      icon: 'success',
      customClass: 'toast__container'
    })

    dispatch(deleteContact(deletingContact))
  } catch (error) {
    console.log(error);
    
    Swal.fire({
      title: 'Oops, algo deu errado!',
      text: 'Tente novamente mais tarde',
      icon: 'error',
      customClass: 'toast__container'
    })
  }
}