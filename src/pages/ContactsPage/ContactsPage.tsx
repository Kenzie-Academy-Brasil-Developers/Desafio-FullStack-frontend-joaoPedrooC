import { ContactsList } from "../../components/ContactsList/ContactsList"
import { CreateContact } from "../../components/CreateContact/CreateContact"
import { DefaultTemplate } from "../../components/DefaultTemplate/DefaultTemplate"

export const ContactsPage = () => {
  return (
    <DefaultTemplate>
      <CreateContact />
      <ContactsList />
    </DefaultTemplate>
  )
}