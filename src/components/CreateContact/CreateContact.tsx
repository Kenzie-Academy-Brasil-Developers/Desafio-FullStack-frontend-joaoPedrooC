import { FaPlus } from "react-icons/fa"

import styles from './style.module.scss'
import { useState } from "react"
import { CreateContactModal } from "../Modals/CreateContactModal/CreateContactModal"

export const CreateContact = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <>
      <div className={styles.create__container}>
        <button className={`font__poppins--tertiary ${styles.button__create}`} onClick={() => setIsOpen(!isOpen)}>
          <FaPlus />
          Novo
        </button>
      </div>
      { isOpen ? <CreateContactModal setIsOpen={setIsOpen} /> : null }
    </>
  )
}