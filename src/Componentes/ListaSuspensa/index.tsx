import styles from './ListaSuspensa.module.css'

interface Props {
    valor: string;
    alterado: (valor: string) => void
}

export default function ListaSuspensa({ valor, alterado }: Props) {
    return (
        <div className={styles.lista__suspensa}>
            <label>Categoria</label>
            <select onChange={evento => alterado(evento.target.value)} value={valor} required>
                <option value=""></option>
                <option value="Doce">Doce</option>
                <option value="Salgado">Salgado</option>
                <option value="Bebida">Bebida</option>
            </select>
        </div>
    )
}
