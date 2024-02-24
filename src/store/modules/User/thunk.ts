import { Dispatch } from "redux";
import { api } from "../../../services/api";
import { IUser } from "../../../interfaces/user";
import { getUserInfo } from "./actions";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { getUserContacts } from "../Contacts/actions";

export const getUserInfoThunk = (userToken: string, userId: string) => async (dispatch: Dispatch) => {
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