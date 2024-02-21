import { Input } from "../../components/Input/Input"
import styles from './style.module.scss';

export const LoginPage = () => {
  return (
    <main>
      <div className={`container ${styles.login__container}`}>
        <h1 className="font__poppins--primary">Seus <span className="font__green">contatos</span> em um só lugar</h1>
        <div>
          <form className={styles.login__form}>
            <h3 className="font__poppins--secondary">Login</h3>
            <div>
              <Input type="email" placeholder="Digite seu e-mail aqui" />
              <Input type="password" placeholder="Digite sua senha aqui" />
              <button className={`button__green font__poppins--tertiary ${styles.button__submit}`}>Entrar</button>
            </div>
          </form>
          <span className="font__poppins--tertiary">Não tem uma conta? <a href="" className="font__green">Cadastre-se</a></span>
        </div>
      </div>
    </main>
  )
}