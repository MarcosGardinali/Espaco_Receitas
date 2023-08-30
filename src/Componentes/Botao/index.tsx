import styles from './Botao.module.css'

interface Props{
    children: string
}

export default function Botao({children}: Props) {
  return (
    <button className={styles.botao}>
        {children}
    </button>
  )
}
