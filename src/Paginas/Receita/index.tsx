import { useParams } from 'react-router-dom'
import styles from './Receita.module.css'
import NaoEncontrada from 'Paginas/NaoEncontrada';
import imagem from '../../Assets/img/food.png'

interface Receitas {
    id: string;
    titulo: string;
    descricao: string;
    receita: string;
    categoria: string;
}

interface Props {
    receitas: Receitas[]
}


export default function Receita({ receitas }: Props) {

    const parametros = useParams()

    const receita = receitas.find((receita) => {
        return receita.id === parametros.id
    })

    if (!receita) {
        return <NaoEncontrada />
    }

    return (
        <main className={styles.pagina}>
            <section className={styles.apresentacao}>
                <h2>{receita.titulo}</h2>
            </section>
            <section className={styles.apresentacao__imagem}>
                <img src={imagem} alt={`Imagem de ${receita.titulo}`} className={styles.imagem__comida} />
            </section>
            <article className={styles.conteudo}>
                <h3>{receita.descricao}</h3>
                <p>{receita.receita}</p>
            </article>
            <h4>{receita.categoria}</h4>
        </main>
    )
}
