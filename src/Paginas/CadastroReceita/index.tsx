import Formulario from 'Componentes/Formulario'
import styles from './CadastroReceita.module.css'

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

export default function CadastroReceita({cadastrarReceita}: Props) {
  return (
    <main className={styles.pagina}>
      <section className={styles.conteudo}>
        <h2>Cadastre sua receita para que ela seja compartilhada com todos!</h2>
        <Formulario 
          cadastrarReceita={cadastrarReceita}
        />
      </section>
    </main>
  )
}
