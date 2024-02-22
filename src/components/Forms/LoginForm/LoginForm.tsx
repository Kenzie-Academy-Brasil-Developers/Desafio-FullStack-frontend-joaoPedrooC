import { Input } from "../../Input/Input"
import styles from './style.module.scss';

export const LoginForm = () => {
  return (
    <form className={styles.login__form}>
      <h3 className="font__poppins--secondary">Login</h3>
      <div>
        <Input type="email" placeholder="Digite seu e-mail aqui" />
        <Input type="password" placeholder="Digite sua senha aqui" />
        <button className={`button__green font__poppins--tertiary ${styles.button__submit}`}>Entrar</button>
      </div>
    </form>
  )
}