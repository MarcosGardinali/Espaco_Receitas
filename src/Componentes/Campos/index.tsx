import styles from './Campos.module.css';

interface Props{
    children: string;
}

export default function Campos({children}: Props) {

  return (
    <section>
        <label className={styles.campos}>
            {children}
            <input 
              required
            >
            </input>
        </label>
    </section>
  )
}
