import Campos from 'Componentes/Campos'
import styles from './Formulario.module.css'
import Botao from 'Componentes/Botao'

export default function Formulario() {

  return (
    <form className={styles.formulario}>
      <section className={styles.campos}>
        <Campos>
          Titulo da Receita:
        </Campos>
        <Campos>
          Descrição da Receita:
        </Campos>
      </section>
      <label className={styles.campo__receita}>
        Digite a Receita:
        <textarea required></textarea>
      </label>
      <label className={styles.campo__receita}>
        Foto da Receita:
        <input type='file'/>
      </label>
      <Botao>
        Compartilhar Receita!
      </Botao>
    </form>
  )
}
