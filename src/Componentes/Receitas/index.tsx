import styles from './Receitas.module.css'
import imagem from '../../Assets/img/food.png'

interface Receita {
    id: string;
    titulo: string;
    descricao: string;
    receita: string;
  }

interface Props{
    receitas: Receita[]
}

export default function Receitas({receitas}: Props) {
    return (
        <section className={styles.container__receitas}>
            {receitas.map(receita => (
                <li className={styles.receita} key={receita.id} title={receita.titulo}>
                    <img className={styles.receita__imagem} src={imagem} alt={receita.titulo} />
                    <h5 className={styles.receita__titulo}>{receita.titulo}</h5>
                    <p className={styles.receita__descricao}>{receita.descricao}</p>
                </li>
            ))}
        </section>
    )
}
