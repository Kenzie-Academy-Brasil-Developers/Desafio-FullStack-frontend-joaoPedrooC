import styles from './style.module.scss'

interface IHeaderProps {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const Header = ({ isOpen, setIsOpen }: IHeaderProps) => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.menu__hamburguerContainer} onClick={() => setIsOpen(!isOpen)} >
          <div className={` ${styles.menu__hamburguer} ${isOpen ? styles.active : ''} `}></div>
        </div>
      </div>
    </header>
  )
}