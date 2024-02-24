import { IoMdClose } from "react-icons/io";
import styles from './style.module.scss'
import { CreateContactForm } from "../../Forms/CreateContactForm/CreateContactForm";

interface ICreateContactModalProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const CreateContactModal = ({ setIsOpen }: ICreateContactModalProps) => {
  return (
    <div className={styles.contact__modal}>
      <div>
        <div className={styles.modal__header}>
          <h3 className="font__poppins--secondary">Cadastre um novo contato</h3>
          <IoMdClose onClick={() => setIsOpen(false)} />
        </div>
        <CreateContactForm setIsOpen={setIsOpen} />
      </div>
    </div>
  )
}