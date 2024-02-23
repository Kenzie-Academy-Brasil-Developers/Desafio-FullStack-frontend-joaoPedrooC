import { CiLogout } from "react-icons/ci"
import { ButtonRed } from "../Buttons/ButtonRed/ButtonRed"
import { MenuOptions } from "../MenuOptions/MenuOptions"

import styles from './style.module.scss'

export const DefaultTemplateAside = () => {
  return (
    <aside className={styles.aside__template}>
      <MenuOptions />
      <ButtonRed>
        <CiLogout />
        Sair
      </ButtonRed>
    </aside>
  )
}