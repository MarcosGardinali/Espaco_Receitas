import styles from './Cabecalho.module.css'
import Navegacao from './Navegacao'
import { GiHamburgerMenu } from 'react-icons/gi';


export default function Cabecalho() {
  return (
    <header className={styles.cabecalho}>
      <section className={styles.titulo__hamburguer__container}>
        <GiHamburgerMenu size={28} className={styles.menu__hamburguer}/>
        <h1 className={styles.cabecalho__titulo}>Espaço Receitas</h1>
      </section>
      <section className={styles.navegacao__container}>
        <Navegacao to={'/'}>
          Inicio
        </Navegacao>
        <Navegacao to={'/cadastrar-receita'}>
          Cadastrar Receita
        </Navegacao>
        <Navegacao to={'/sobre'}>
          Sobre
        </Navegacao>
        <Navegacao to={'/contato'}>
          Contato
        </Navegacao>
      </section>
    </header>
  )
}
