import { UpdateUserInfoForm } from "../../Forms/UpdateUserInfoForm/UpdateUserInfoForm"
import styles from './style.module.scss'

export const ProfileInfoSection = () => {
  return (
    <section className={styles.profile__section}>
      <h1 className="font__poppins--primary">Configurações</h1>
      <UpdateUserInfoForm />
    </section>
  )
}