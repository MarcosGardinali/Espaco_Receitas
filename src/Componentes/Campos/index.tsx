import styles from './Campos.module.css';

interface Props{
    children: string;
    valor: string;
}

export default function Campos({children, valor}: Props) {

  return (
    <section>
        <label className={styles.campos}>
            {children}
            <input 
              value={valor}
              required
            >
            </input>
        </label>
    </section>
  )
}
