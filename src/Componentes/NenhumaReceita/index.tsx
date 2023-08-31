import styles from './NenhumaReceita.module.css'
import imagem from '../../Assets/img/zard.gif'

export default function NenhumaReceita() {
  return (
    <section className={styles.nenhuma__receita}>
        <h3>Nenhuma receita encontrada!</h3>
        <img src={imagem} alt='Imagem'/>
    </section>
  )
}
