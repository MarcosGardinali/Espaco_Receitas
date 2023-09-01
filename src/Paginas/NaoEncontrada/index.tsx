import styles from './NaoEncontrada.module.css'
import imagem from '../../Assets/img/notfound.png'

export default function NaoEncontrada() {
  return (
    <main className={styles.pagina}>
      <section className={styles.conteudo}>
        <img src={imagem} alt="Imagem Not Found"/>
        <h2>Desculpe, não conseguimos encontrar a página desejada!</h2>
      </section>
    </main>
  )
}
