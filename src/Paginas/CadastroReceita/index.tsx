import Formulario from 'Componentes/Formulario'
import styles from './CadastroReceita.module.css'

export default function CadastroReceita() {
  return (
    <main className={styles.pagina}>
      <section className={styles.conteudo}>
        <h2>Cadastre sua receita para que ela seja compartilhada com todos!</h2>
        <Formulario />
      </section>
    </main>
  )
}
