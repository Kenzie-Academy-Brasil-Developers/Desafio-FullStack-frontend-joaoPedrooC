import { Link } from "react-router-dom";
import { LoginForm } from "../../components/Forms/LoginForm/LoginForm";
import styles from './style.module.scss';

export const LoginPage = () => {
  return (
    <main>
      <div className={`container ${styles.login__container}`}>
        <h1 className="font__poppins--primary">Seus <span className="font__green">contatos</span> em um só lugar</h1>
        <div>
          <LoginForm />
          <span className="font__poppins--tertiary">Não tem uma conta? <Link to={'/register'} className="font__green">Cadastre-se</Link></span>
        </div>
      </div>
    </main>
  )
}