import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useNavigate } from "react-router"

import { api } from "../../../services/api"
import { AxiosError } from "axios"
import Swal from "sweetalert2"

import { IUserCreate } from "../../../interfaces/user"
import { userCreateSchema } from "./userCreateSchema"

import { Input } from "../../Input/Input"

import styles from './style.module.scss'

export const RegisterForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<IUserCreate>({
    resolver: zodResolver(userCreateSchema)
  })

  const navigate = useNavigate()

  const submit = async (formData: IUserCreate) => {
    try {
      await api.post('/users', formData)
      Swal.fire({
        title: 'Sucesso!',
        text: 'Sua conta foi registrada com sucesso, aguarde alguns segundos e você será redirecionado para a tela de login!',
        icon: 'success',
        customClass: 'toast__container',
        timer: 2000
      })
      
      navigate('/')
    } catch (error) {
      const axiosError = error as AxiosError
      console.log(axiosError);
      
      if(axiosError.response?.status === 409) {
        Swal.fire({
          title: 'E-mail ou número de telefone já cadastrado(s)',
          text: 'Parece que essa conta já existe, que tal tentar fazer login ou usar dados diferentes?',
          icon: 'error',
          customClass: 'toast__container'
        })
      } else {
        Swal.fire({
          title: 'Ops, estamos com algum problema interno!',
          text: 'Tente cadastrar sua conta novamente mais tarde!',
          icon: 'error',
          customClass: 'toast__container'
        })
      }
    }
  }

  return (
    <form className={styles.register__form} onSubmit={handleSubmit(submit)}>
      <Input placeholder="Digite seu nome aqui" type="text" errors={errors.name} {...register('name')} />
      <Input placeholder="Digite seu e-mail aqui" type="email" errors={errors.email} {...register('email')}/>
      <Input placeholder="Digite sua senha aqui" type="password" errors={errors.password} {...register('password')}/>
      <Input placeholder="Digite seu número com DDD aqui" type="text" errors={errors.number} {...register('number')}/>
      <button type="submit" className={`button__green font__poppins--tertiary ${styles.button__register}`}>Cadastrar</button>
    </form>
  )
}