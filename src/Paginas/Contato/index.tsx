import Botao from 'Componentes/Botao'
import styles from './Contato.module.css'
import imagem from 'Assets/img/contact.png'

export default function Contato() {
  return (
    <main className={styles.pagina}>
        <h2>Contate-nos</h2>
        <form className={styles.formulario}>
          <label className={styles.campos}>
            Nome:
            <input placeholder='Seu Nome'></input>
          </label>
          <label className={styles.campos}>
            Mensagem:
            <input placeholder='Sua Mensagem'></input>
          </label>
          <Botao>
            Enviar
          </Botao>
        </form>
        <section className={styles.imagem__container}>
          <img src={imagem} alt='Imagem de contato' />
        </section>
    </main>
  )
}
