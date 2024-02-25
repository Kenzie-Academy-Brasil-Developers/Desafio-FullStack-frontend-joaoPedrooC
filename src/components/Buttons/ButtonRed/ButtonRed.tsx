import { ReactNode } from "react"
import { Link } from "react-router-dom"

import styles from './style.module.scss'

interface IButtonRedProps {
  children: ReactNode
}

export const ButtonRed = ({ children, ...rest }: IButtonRedProps) => {
  const logout = () => {
    localStorage.removeItem('@contacts:token')
    localStorage.removeItem('@contacts:userId')
  }

  return (
    <Link className={`font__poppins--tertiary ${styles.button__red}`} to={'/'} {...rest} onClick={logout}>{children}</Link>
  )
}