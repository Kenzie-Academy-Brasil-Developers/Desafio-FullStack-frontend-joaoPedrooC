import { AiOutlineHome } from "react-icons/ai"
import { IoIosContact } from "react-icons/io"
import { IoSettingsOutline } from "react-icons/io5"
import styles from './style.module.scss'
import { Link } from "react-router-dom"

export const MenuOptions = () => {
  return (
    <ul className={styles.menu__list}>
      <li>
        <AiOutlineHome />
        <Link to={'/dashboard'} className="font__poppins--tertiary">Home</Link>
      </li>
      <li>
        <IoIosContact />
        <Link to={'/contacts'} className="font__poppins--tertiary">Contatos</Link>
      </li>
      <li>
        <IoSettingsOutline />
        <Link to={'/settings'} className="font__poppins--tertiary">Configurações</Link>
      </li>
    </ul>
  )
}