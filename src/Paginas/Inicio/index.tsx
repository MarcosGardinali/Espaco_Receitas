import Receitas from 'Componentes/Receitas';
import styles from './Inicio.module.css';

export default function Inicio() {
  return (
    <main className={styles.pagina}>
      <section className={styles.apresentacao}>
        <h3>Bem-Vindo ao <strong>Espaço Receitas</strong></h3>
      </section>
      <article className={styles.conteudo}>
        <h4>Confira nossas receitas:</h4>
        <ul className={styles.conteudo__receitas}>
          <Receitas />
        </ul>
      </article>
    </main>
  );
}
