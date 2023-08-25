import Campos from 'Componentes/Campos'
import styles from './Formulario.module.css'
import Botao from 'Componentes/Botao'
import { useState } from 'react'

export default function Formulario() {

  const [titulo, setTitulo] = useState<string>('');
  const [descricao, setDescricao] = useState<string>('');
  const [receita, setReceita] = useState<string>('');

  return (
    <form className={styles.formulario}>
      <Campos
        valor={titulo}
      >
        Titulo da Receita:
      </Campos>
      <Campos
        valor={descricao}
        >
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
