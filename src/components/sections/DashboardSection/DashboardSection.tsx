import styles from './style.module.scss'

export const DashboardSection = () => {
  return (
    <section className={styles.dashboard__section}>
      <h1 className="font__poppins--primary">Bem vindo ao <span className="font__green">contacts</span></h1>
      <ul className={styles.dashboard__list}>
        <li>
          <h3 className='font__poppins--secondary'>Tenha seus contatos na palma da sua mão</h3>
          <p className='font__poppins--tertiary'>Com o contacts você consegue acessar seus contatos de onde você estiver!</p>
        </li>
        <li>
          <h3 className='font__poppins--secondary'>Simples e facil de usar</h3>
          <p className='font__poppins--tertiary'>O contacts possui uma interface simples e prática, permitindo que você navegue no aplicativo sem dificuldades!</p>
        </li>
      </ul>
    </section>
  )
}