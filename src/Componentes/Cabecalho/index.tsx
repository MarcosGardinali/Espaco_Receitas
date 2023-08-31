import { Link } from 'react-router-dom';
import styles from './Cabecalho.module.css'
import Navegacao from './Navegacao'
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';


export default function Cabecalho() {

  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <header className={styles.cabecalho}>
      <section className={styles.titulo__hamburguer__container}>
        <GiHamburgerMenu size={28} className={styles.menu__hamburguer} onClick={toggleMenu}/>
        <Link to={'/'} className={styles.cabecalho__titulo} title='Home'>Espaço Receitas</Link>
      </section>
      <section className={`${styles.navegacao__container} ${menuAberto ? styles.aberto : ''}`}>
        <Navegacao to={'/'} onClick={toggleMenu}>
          Inicio
        </Navegacao>
        <Navegacao to={'/cadastrar-receita'} onClick={toggleMenu}>
          Cadastrar Receita
        </Navegacao>
        <Navegacao to={'/sobre'} onClick={toggleMenu}>
          Sobre
        </Navegacao>
        <Navegacao to={'/contato'} onClick={toggleMenu}>
          Contato
        </Navegacao>
      </section>
    </header>
  )
}
