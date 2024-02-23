import { ReactNode, useState } from "react";
import { Header } from "../Header/Header"
import { MenuModal } from "../Modals/MenuModal/MenuModal";

import styles from './style.module.scss'
import { DefaultTemplateAside } from "../DefaultTemplateAside/DefaultTemplateAside";

interface IDefaultTemplateProps {
  children: ReactNode
}

export const DefaultTemplate = ({ children }: IDefaultTemplateProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <div className={styles.div__template}>
        <Header isOpen={isOpen} setIsOpen={setIsOpen}/>
        <main>
          <div className={`container ${styles.template__container}`}>
            { isOpen ? <MenuModal /> : null }
            {children}
          </div>
        </main>
        <DefaultTemplateAside />
      </div>
    </>
  )
}