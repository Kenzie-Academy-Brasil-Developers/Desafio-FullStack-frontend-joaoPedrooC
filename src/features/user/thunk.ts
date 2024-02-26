import { useNavigate } from "react-router-dom"
import { api } from "../../services/api"
import { IUser, TUserUpdate } from "../../interfaces/user"
import Swal from "sweetalert2"
import { deleteUser, getUserInfo, updateUser } from "./user-slice"
import { getUserContacts } from "../contacts/contacts-slice"
import { AppDispatch } from "../../store"

export const getUserInfoThunk = (userToken: string, userId: string) => async (dispatch: AppDispatch) => {
  const navigate = useNavigate()

  try {
    const { data } = await api.get<IUser>(`/users/${userId}`, {
      headers: {
        Authorization: `Bearer ${userToken}`
      }
    })

    dispatch(getUserInfo(data))
    dispatch(getUserContacts(data.contacts))
  } catch (error) {
    Swal.fire({
      title: 'Oops, seu token expirou!',
      text: 'Parece que seu token de usuário expirou, faça login novamente para acessar a aplicação!',
      icon: 'error',
      customClass: 'toast__container'
    })

    localStorage.removeItem('@contacts:token')
    localStorage.removeItem('@contacts:userId')
    navigate('/')
  }
}

export const updateUserProfile = (updatedUser: TUserUpdate) => async (dispatch: AppDispatch) => {
  try {
    const userToken = localStorage.getItem('@contacts:token')
    const userId = localStorage.getItem('@contacts:userId')
  
    const { data } = await api.patch<IUser>(`/users/${userId}`, updatedUser, {
      headers: {
        Authorization: `Bearer ${userToken}`
      }
    })
  
    Swal.fire({
      title: 'Seus dados foram alterados com sucesso!',
      text: 'Você já consegue visualizar as alterações em sua página de perfil!',
      icon: 'success',
      customClass: 'toast__container'
    })
    
    dispatch(updateUser(data))
  } catch (error) {
    console.log(error);
    Swal.fire({
      title: 'Oops, parece que algo deu errado!',
      text: 'Estamos com algum problema interno no momento, aguarde alguns minutos e tente novamente.',
      icon: 'error',
      customClass: 'toast__container'
    })
  }
}

export const deleteAccountThunk = (accountId: string) => async (dispatch: AppDispatch) => {
  try {
    const userToken = localStorage.getItem('@contacts:token')

    await api.delete(`/users/${accountId}`, {
      headers: {
        Authorization: `Bearer ${userToken}`
      }
    })

    localStorage.removeItem('@contacts:token')
    localStorage.removeItem('@contacts:userId')

    dispatch(deleteUser())

    location.reload()
  } catch (error) {
    console.log(error);
    
  }
}