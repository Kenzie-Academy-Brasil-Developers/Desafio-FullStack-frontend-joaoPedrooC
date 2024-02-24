import { useForm } from "react-hook-form"
import { Input } from "../../Input/Input"
import styles from './style.module.scss'
import { zodResolver } from "@hookform/resolvers/zod"
import { createContactSchema } from "./createContactFormSchema"
import { ICreateContact } from "../../../interfaces/contacts"
import { useDispatch } from "react-redux"
import { createContactThunk } from "../../../store/modules/Contacts/thunk"

interface ICreateContactFormProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const CreateContactForm = ({ setIsOpen }: ICreateContactFormProps) => {
  const { register, handleSubmit, formState: { errors }} = useForm<ICreateContact>({
    resolver: zodResolver(createContactSchema)
  })

  const dispatch: any = useDispatch()

  const submit = (formData: ICreateContact) => {
    dispatch(createContactThunk(formData))
    setIsOpen(false);
  }
  
  return (
    <form className={styles.create__form} onSubmit={handleSubmit(submit)}>
      <div>
        <Input placeholder="Digite o nome do contato" type="text" errors={errors.name} {...register('name')} />
        <Input placeholder="Digite o e-mail do contato" type="email" errors={errors.email} {...register('email')} />
        <Input placeholder="Digite o número do contato" type="text" errors={errors.number} {...register('number')} />
      </div>
      <button type="submit" className="font__poppins--tertiary">Cadastrar contato</button>
    </form>
  )
}