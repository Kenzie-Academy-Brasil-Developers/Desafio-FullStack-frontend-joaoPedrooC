import { useForm } from "react-hook-form";
import { Input } from "../../Input/Input"
import styles from './style.module.scss';
import { IUserLoginInterface, IUserLoginResponse } from "../../../interfaces/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { createUserSchema } from "./createUserSchema";
import Swal from "sweetalert2";
import { api } from "../../../services/api";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<IUserLoginInterface>({
    resolver: zodResolver(createUserSchema)
  })
  const navigate = useNavigate()

  const submit = async (formData: IUserLoginInterface) => {
    try {
      const { data } = await api.post<IUserLoginResponse>('/login', formData);
      Swal.fire({
        title: 'Sucesso!',
        text: 'Login realizado com sucesso, em breve você será redirecionado para a página inicial!',
        icon: 'success',
        customClass: 'toast__container',
        timer: 2000
      })
      
      localStorage.setItem('@contacts:token', data.token)
      navigate('/dashboard')
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: 'Oops, algo deu errado!',
        text: 'E-mail ou senha incorretos!',
        icon: 'error',
        customClass: 'toast__container'
      })
    }
  }

  return (
    <form className={styles.login__form} onSubmit={handleSubmit(submit)}>
      <h3 className="font__poppins--secondary">Login</h3>
      <div>
        <Input type="email" placeholder="Digite seu e-mail aqui" errors={errors.email} {...register('email')} />
        <Input type="password" placeholder="Digite sua senha aqui" errors={errors.password} {...register('password')} />
        <button className={`button__green font__poppins--tertiary ${styles.button__submit}`}>Entrar</button>
      </div>
    </form>
  )
}