import { MenuOptions } from "../../MenuOptions/MenuOptions"
import { CiLogout } from "react-icons/ci"
import styles from './style.module.scss'
import { ButtonRed } from "../../Buttons/ButtonRed/ButtonRed"

export const MenuModal = () => {
  return (
    <div role="dialog" className={styles.menu__modal}>
      <div>
        <div>
          <MenuOptions />
        </div>
        <ButtonRed>
          <CiLogout />
          Sair
        </ButtonRed>
      </div>
    </div>
  )
}