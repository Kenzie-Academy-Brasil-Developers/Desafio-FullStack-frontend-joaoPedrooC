import { IContact } from "../../interfaces/contacts"
import { IoIosPhonePortrait } from "react-icons/io"
import { MdOutlineEmail } from "react-icons/md"
import { CiCalendar } from "react-icons/ci"

import styles from './style.module.scss'

interface IViewContactModalUserInfoProps {
  contact: IContact
}

export const ViewContactModalUserInfo = ({ contact }: IViewContactModalUserInfoProps) => {
  return (
    <>
      <div className={styles.view__contactsContainer}>
        <MdOutlineEmail />
        <span className="font__inter">
          E-mail: {contact.email}
        </span>
      </div>
      <div className={styles.view__contactsContainer}>
        <IoIosPhonePortrait />
        <span className="font__inter">Número de telefone: {contact.number}</span>
      </div>
      <div className={styles.view__contactsContainer}>
        <CiCalendar />
        <span className="font__inter">Contato cadastrado em: {contact.createdAt.toString().slice(0, 10).split('-').reverse().join('/')}</span>
      </div>
    </>
  )
}