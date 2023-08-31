import styles from './Campos.module.css';

interface Props{
    children: string;
    valor: string;
    alterado: (valor: string) => void
}

export default function Campos({children, valor, alterado}: Props) {

  return (
    <section>
        <label className={styles.campos}>
            {children}
            <input 
              required
              onChange={evento => alterado(evento.target.value)}
            >
            </input>
        </label>
    </section>
  )
}
