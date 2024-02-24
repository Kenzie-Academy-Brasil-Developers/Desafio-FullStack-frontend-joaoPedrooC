import { IContact } from "../../../interfaces/contacts"
import { CgProfile } from "react-icons/cg"
import { FaRegEye } from "react-icons/fa"
import { SlPencil } from "react-icons/sl"
import { GoTrash } from "react-icons/go"
import styles from './style.module.scss'

export const ContactsCard = ({ contactInfo }: { contactInfo: IContact }) => {
  const numberTemplate = `(${contactInfo.number.slice(0,2)}) ${contactInfo.number.slice(2, 7)}-${contactInfo.number.slice(7)}`
  
  return (
    <li className={styles.contacts__card}>
      <div className={styles.card__info}>
        <CgProfile className={styles.card__profile} />
        <div>
          <h3 className="font__poppins--tertiary">{contactInfo.name}</h3>
          <span className="font__poppins--tertiary">{numberTemplate}</span>
        </div>
      </div>
      <div className={styles.card__actions}>
        <FaRegEye />
        <SlPencil />
        <GoTrash />
      </div>
    </li>
  )
}