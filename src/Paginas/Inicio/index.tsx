import Receitas from 'Componentes/Receitas';
import styles from './Inicio.module.css';
import NenhumaReceita from 'Componentes/NenhumaReceita';

interface Receita {
  id: string;
  titulo: string;
  descricao: string;
  receita: string;
  categoria: string;
}

interface Props {
  receitas: Receita[]
}

export default function Inicio({ receitas }: Props) {
  return (
    <main className={styles.pagina}>
      <section className={styles.apresentacao}>
        <h3>Bem-Vindo ao <strong>Espaço Receitas</strong></h3>
      </section>
      <article className={styles.conteudo}>
        <h4>Confira nossas receitas:</h4>
        {receitas.length > 0 ? (
          <ul className={styles.conteudo__receitas}>
            <Receitas
              receitas={receitas}
            />
          </ul>
        ) : (
          <NenhumaReceita />
        )
        }

      </article>
    </main>
  );
}
