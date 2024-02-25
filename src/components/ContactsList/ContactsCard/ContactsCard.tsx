import { IContact } from "../../../interfaces/contacts"
import { CgProfile } from "react-icons/cg"
import { FaRegEye } from "react-icons/fa"
import { SlPencil } from "react-icons/sl"
import { GoTrash } from "react-icons/go"
import styles from './style.module.scss'
import { useState } from "react"
import { UpdateContactModal } from "../../Modals/UpdateContactModal/UpdateContactModal"
import Swal from "sweetalert2"
import { useDispatch } from "react-redux"
import { deleteContactThunk } from "../../../store/modules/Contacts/thunk"
import { ViewContactModal } from "../../Modals/ViewContactModal/ViewContactModal"

interface IContactsCardProps {
  contactInfo: IContact
}

export const ContactsCard = ({ contactInfo }: IContactsCardProps) => {
  const numberTemplate = `(${contactInfo.number.slice(0,2)}) ${contactInfo.number.slice(2, 7)}-${contactInfo.number.slice(7)}`

  const [editOpen, setEditOpen] = useState<boolean>(false)
  const [viewOpen, setviewOpen] = useState<boolean>(false)

  const dispatch: any = useDispatch()

  const deleteContact = () => {
    Swal.fire({
      title: 'Você tem certeza?',
      text: 'Você não é capaz de recuperar um contato após sua exclusão!',
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Sim, quero excluir este contato!',
      confirmButtonColor: 'var(--color-red-1)',
      cancelButtonText: 'Cancelar',
      customClass: 'toast__container',
      focusCancel: true,
      iconColor: 'var(--color-red-1)',
    }).then((result) => {
      if(result.isConfirmed) {
        dispatch(deleteContactThunk(contactInfo))
      }
    })
  }
  
  return (
    <>
      <li className={styles.contacts__card}>
        <div className={styles.card__info}>
          <CgProfile className={styles.card__profile} />
          <div>
            <h3 className="font__poppins--tertiary">{contactInfo.name}</h3>
            <span className="font__poppins--tertiary">{numberTemplate}</span>
          </div>
        </div>
        <div className={styles.card__actions}>
          <FaRegEye onClick={() => setviewOpen(true)} />
          <SlPencil onClick={() => setEditOpen(true)} />
          <GoTrash onClick={deleteContact} />
        </div>
      </li>
      { editOpen ? <UpdateContactModal setIsOpen={setEditOpen} contact={contactInfo} /> : null }
      { viewOpen ? <ViewContactModal setIsOpen={setviewOpen} contact={contactInfo} /> : null }
    </>
  )
}