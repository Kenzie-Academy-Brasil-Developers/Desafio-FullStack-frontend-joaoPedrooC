import { IoMdClose } from "react-icons/io"
import { IContact } from "../../../interfaces/contacts"
import styles from './styles.module.scss'
import { UpdateContactForm } from "../../Forms/UpdateContactForm/UpdateContactForm"

interface IUpdateModalProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  contact: IContact
}

export const UpdateContactModal = ({ setIsOpen, contact }: IUpdateModalProps) => {
  return (
    <div className={styles.contact__modal}>
      <div>
        <div className={styles.modal__header}>
          <h3 className="font__poppins--secondary">Atualização de contato</h3>
          <IoMdClose onClick={() => setIsOpen(false)} />
        </div>
        <UpdateContactForm contact={contact} setIsOpen={setIsOpen} />
      </div>
    </div>
  )
}