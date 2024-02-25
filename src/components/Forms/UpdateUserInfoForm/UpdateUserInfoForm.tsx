import { useForm } from "react-hook-form"
import { Input } from "../../Input/Input"

import styles from './style.module.scss'
import { TUserUpdate } from "../../../interfaces/user"
import { zodResolver } from "@hookform/resolvers/zod"
import { updateUserInfoSchema } from "./updateUserInfoSchema"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../../store"
import { deleteAccountThunk, updateUserProfile } from "../../../features/user/thunk"
import Swal from "sweetalert2"

export const UpdateUserInfoForm = () => {
  const user = useSelector((state: RootState) => state.user)

  const { register, handleSubmit, formState: { errors } } = useForm<TUserUpdate>({
    resolver: zodResolver(updateUserInfoSchema),
    values: {
      name: user.name,
      email: user.email,
      number: user.number
    }
  })

  const dispatch: AppDispatch = useDispatch()
  
  const submit = (formData: TUserUpdate) => {
    if(formData.password!.length < 6 && formData.password !== '') {
      return Swal.fire({
        title: 'A operação não pode ser concluida!',
        text: 'Sua senha deve conter no mínimo 6 caracteres',
        icon: 'error',
        customClass: 'toast__container'
      })
    }
    
    if(formData.password === '') {
      delete formData.password
    }

    if(formData.email === user.email) {
      delete formData.email
    }

    if(formData.number === user.number) {
      delete formData.number
    }
    
    dispatch(updateUserProfile(formData))
  }

  const deleteAccount = () => {
    Swal.fire({
      title: 'Você tem certeza?',
      text: 'Você não é capaz de recuperar sua conta após a exclusão!',
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Sim, quero excluir minha conta!',
      confirmButtonColor: 'var(--color-red-1)',
      cancelButtonText: 'Cancelar',
      customClass: 'toast__container',
      focusCancel: true,
      iconColor: 'var(--color-red-1)',
    }).then((result) => {
      if(result.isConfirmed) {
        dispatch(deleteAccountThunk(user.id!))
      }
    })
  }

  return (
    <form className={styles.update__userForm} onSubmit={handleSubmit(submit)}>
      <h3 className="font__poppins--secondary">Atualizar informações do perfil</h3>
      <div>
        <label className="font__poppins--tertiary" htmlFor="name">Nome</label>
        <Input placeholder="Digite o novo nome de usuário" type="text" id="name" {...register('name')} errors={errors.name} />
      </div>
      <div>
        <label className="font__poppins--tertiary" htmlFor="email">Email</label>
        <Input placeholder="Digite o novo e-mail de usuário" type="email" id="email" {...register('email')} errors={errors.email} />
      </div>
      <div>
        <label className="font__poppins--tertiary" htmlFor="password">Senha</label>
        <Input placeholder="Digite a nova senha de usuário" type="password" id="password" {...register('password')} errors={errors.password} />
      </div>
      <div>
        <label className="font__poppins--tertiary" htmlFor="number">Número de telefone</label>
        <Input placeholder="Digite o novo número de telefone de usuário" type="text" id="number" {...register('number')} errors={errors.number} />
      </div>
      <div>
        <button className="font__poppins--tertiary" type="button" onClick={deleteAccount}>Excluir conta</button>
        <button className="button__green font__poppins--tertiary" type="submit">Atualizar</button>
      </div>
    </form>
  )
}