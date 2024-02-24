import { ReactNode, useEffect, useState } from "react";
import { Header } from "../Header/Header"
import { MenuModal } from "../Modals/MenuModal/MenuModal";

import styles from './style.module.scss'
import { DefaultTemplateAside } from "../DefaultTemplateAside/DefaultTemplateAside";
import { useDispatch } from "react-redux";
import { getUserInfoThunk } from "../../store/modules/User/thunk";

interface IDefaultTemplateProps {
  children: ReactNode
}

export const DefaultTemplate = ({ children }: IDefaultTemplateProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dispatch: any = useDispatch()

  const userToken = localStorage.getItem('@contacts:token')
  const userId = localStorage.getItem('@contacts:userId')
  
  dispatch(getUserInfoThunk(userToken!, userId!))

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