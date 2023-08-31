import Campos from 'Componentes/Campos'
import styles from './Formulario.module.css'
import Botao from 'Componentes/Botao'
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import ListaSuspensa from 'Componentes/ListaSuspensa';

interface Props {
  cadastrarReceita: (novaReceita: Receita) => void;
}

interface Receita {
  id: string;
  titulo: string;
  descricao: string;
  receita: string;
  categoria: string
}

export default function Formulario({ cadastrarReceita }: Props) {

  const navigate = useNavigate();


  const [tituloReceita, setTituloReceita] = useState('');
  const [descricaoReceita, setDescricaoReceita] = useState('');
  const [receitaPreparo, setReceitaPreparo] = useState('');
  const [categoria, setCategoria] = useState('')

  function salvar(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault()


    const novaReceita: Receita = {
      id: uuidv4(),
      titulo: tituloReceita,
      descricao: descricaoReceita,
      receita: receitaPreparo,
      categoria: categoria
    };
    cadastrarReceita(novaReceita)

    setTituloReceita('')
    setDescricaoReceita('')
    setReceitaPreparo('')

    navigate('/');
  }

  function receitaDigitada(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setReceitaPreparo(event.target.value);
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
        <ListaSuspensa
          valor={categoria}
          alterado={setCategoria}
        />
      </section>
      <label className={styles.campo__receita}>
        Digite a Receita:
        <textarea
          required
          value={receitaPreparo}
          onChange={receitaDigitada}
        ></textarea>
      </label>
      <Botao>
        Compartilhar Receita!
      </Botao>
    </form>
  )
}


