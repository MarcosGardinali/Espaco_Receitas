import Campos from 'Componentes/Campos'
import styles from './Formulario.module.css'
import Botao from 'Componentes/Botao'

export default function Formulario() {

  return (
    <form className={styles.formulario}>
      <Campos>
        Titulo da Receita:
      </Campos>
      <Campos>
        Descrição da Receita:
      </Campos>
      <label className={styles.campo__receita}>
        Digite a Receita:
        <textarea required></textarea>
      </label>
      <Botao>
        Compartilhar Receita!
      </Botao>
    </form>
  )
}
