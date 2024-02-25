import { IoIosContact } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { IoMdClose } from "react-icons/io"

import { IContact } from "../../../interfaces/contacts"

import styles from './style.module.scss'
import { ViewContactModalUserInfo } from "../../ViewContactModalUserInfo/ViewContactModalUserInfo";

interface IViewContactModalProps {
  contact: IContact
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const ViewContactModal = ({ contact, setIsOpen }: IViewContactModalProps) => {
  return (
    <div className={styles.contact__modal}>
      <div>
        <IoMdClose onClick={() => setIsOpen(false)} className={styles.modal__close} />
        <IoIosContact className={styles.modal__profileIcon} />
        <h3 className="font__poppins--secondary">{contact.name}</h3>
        <div className={styles.modal__userInfo}>
          <ViewContactModalUserInfo contact={contact} />
        </div>
      </div>
    </div>
  )
}