import { useSelector } from "react-redux"
import { ContactsCard } from "./ContactsCard/ContactsCard"
import { IContact } from "../../interfaces/contacts"

import styles from './style.module.scss'

export const ContactsList = () => {
  const userContacts: IContact[] = useSelector(store => store.contacts)

  const contactsFirstLetter: string[] = []

  userContacts.forEach(contact => {
    if(!contactsFirstLetter.includes(contact.name[0])) {
      contactsFirstLetter.push(contact.name[0])
    }
  });

  contactsFirstLetter.sort()
  
  return (
    <ul className={styles.contacts__list}>
      { contactsFirstLetter.map(firstLetter => {
        const filteredContactsByFirstLetter = userContacts.filter(contact => contact.name[0].toLowerCase() === firstLetter.toLowerCase())
        return (
          <>
            <h1 className="font__poppins--primary">{firstLetter.toUpperCase()}</h1>
            {filteredContactsByFirstLetter.map(contact => <ContactsCard key={contact.id} contactInfo={contact} />)}
          </>
        )
      }) }
    </ul>
  )
}