import { Link, useNavigate } from "react-router-dom";
import { LoginForm } from "../../components/Forms/LoginForm/LoginForm";
import styles from './style.module.scss';
import { useEffect } from "react";

export const LoginPage = () => {
  const userToken = localStorage.getItem('@contacts:token')
  const userId = localStorage.getItem('@contacts:userId')
  const navigate = useNavigate()

  useEffect(() => {
    if(userToken && userId) {
      navigate('/dashboard')
    }
  }, [])

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