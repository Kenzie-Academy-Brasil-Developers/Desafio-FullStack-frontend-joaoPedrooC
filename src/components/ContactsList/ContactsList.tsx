import { useSelector } from "react-redux"
import { ContactsCard } from "./ContactsCard/ContactsCard"

import styles from './style.module.scss'
import { RootState } from "../../store"

export const ContactsList = () => {
  const userContacts = useSelector((store: RootState) => store.contacts)

  const contactsFirstLetter: string[] = []

  userContacts.forEach(contact => {
    if(!contactsFirstLetter.includes(contact.name[0].toUpperCase())) {
      contactsFirstLetter.push(contact.name[0].toUpperCase())
    }
  });

  contactsFirstLetter.sort()
  
  return (
    <ul className={styles.contacts__list}>
      { contactsFirstLetter.map((firstLetter, index) => {
        const filteredContactsByFirstLetter = userContacts.filter(contact => contact.name[0].toLowerCase() === firstLetter.toLowerCase())
        return (
          <div key={index}>
            <h1 className="font__poppins--primary" key={index}>{firstLetter}</h1>
            {filteredContactsByFirstLetter.map(contact => <ContactsCard key={contact.id} contactInfo={contact} />)}
          </div>
        )
      }) }
    </ul>
  )
}