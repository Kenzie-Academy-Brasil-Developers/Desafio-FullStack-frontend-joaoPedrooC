import { Dispatch } from "redux";
import { IContact, ICreateContact } from "../../../interfaces/contacts";
import { api } from "../../../services/api";
import { createContact } from "./actions";
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