import Campos from 'Componentes/Campos'
import styles from './Formulario.module.css'
import Botao from 'Componentes/Botao'
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface Props {
  cadastrarReceita: (novaReceita: Receita) => void;
}

interface Receita {
  id: string;
  titulo: string;
  descricao: string;
  receita: string;
}

export default function Formulario({ cadastrarReceita }: Props) {

  const [tituloReceita, setTituloReceita] = useState('');
  const [descricaoReceita, setDescricaoReceita] = useState('');
  const [receita, setReceita] = useState('');

  function salvar(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault()
    const receitaFinal = [
      tituloReceita,
      descricaoReceita,
      receita
    ]

    const novaReceita: Receita = {
      id: uuidv4(),
      titulo: tituloReceita,
      descricao: descricaoReceita,
      receita: receita,
    };
    cadastrarReceita(novaReceita)

    setTituloReceita('');
    setDescricaoReceita('');
    setReceita('');
    console.log(receitaFinal)
  }

  function receitaDigitada(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setReceita(event.target.value);
  }

  return (
    <form className={styles.formulario} onSubmit={salvar}>
      <section className={styles.campos}>
        <Campos
          valor={tituloReceita}
          alterado={valor => setTituloReceita(valor)}
        >
          Titulo da Receita:
        </Campos>
        <Campos
          valor={descricaoReceita}
          alterado={valor => setDescricaoReceita(valor)}
        >
          Descrição da Receita:
        </Campos>
      </section>
      <label className={styles.campo__receita}>
        Digite a Receita:
        <textarea
          required
          value={receita}
          onChange={receitaDigitada}
        ></textarea>
      </label>
      <label className={styles.campo__receita}>
        Foto da Receita:
        <input type='file' />
      </label>
      <Botao>
        Compartilhar Receita!
      </Botao>
    </form>
  )
}


