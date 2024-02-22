import { Link } from 'react-router-dom'
import { RegisterForm } from '../../components/Forms/RegisterForm/RegisterForm'
import styles from './style.module.scss'

export const RegisterPage = () => {
  return (
    <main>
      <div className={`container ${styles.register__container}`}>
        <div className={styles.form__container}>
          <h3 className="font__poppins--primary">Cadastrar</h3>
          <RegisterForm />
          <span className='font__poppins--tertiary'>Já tem uma conta? <Link to={'/'} className='font__green'>Login</Link></span>
        </div>
      </div>
    </main>
  )
}