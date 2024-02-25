import { useForm } from "react-hook-form"
import { IContact, ICreateContact } from "../../../interfaces/contacts"
import { Input } from "../../Input/Input"

import { zodResolver } from "@hookform/resolvers/zod"
import { updateContactSchema } from "./updateContactFormSchema"

import styles from './style.module.scss'
import { useDispatch } from "react-redux"
import { updateContactThunk } from "../../../store/modules/Contacts/thunk"

interface IUpdateContactFormProps {
  contact: IContact
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const UpdateContactForm = ({ contact, setIsOpen }: IUpdateContactFormProps) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(updateContactSchema),
    values: {
      name: contact.name,
      email: contact.email,
      number: contact.number
    }
  })

  const dispatch: any = useDispatch()

  const submit = (formData: ICreateContact) => {
    dispatch(updateContactThunk(formData, contact.id))
    setIsOpen(false)
  }

  return (
    <form className={styles.update__form} onSubmit={handleSubmit(submit)}>
      <div>
        <Input placeholder="Digite o novo nome do contato" type="text" {...register('name')} errors={errors.name} />
        <Input placeholder="Digite o novo e-mail do contato" type="email" {...register('email')} errors={errors.email} />
        <Input placeholder="Digite o novo número do contato" type="text" {...register('number')} errors={errors.number} />
      </div>
      <button type="submit" className="font__poppins--tertiary">Atualizar contato</button>
    </form>
  )
}