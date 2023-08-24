import styles from './Navegacao.module.css'
import { Link, useLocation } from 'react-router-dom'

interface Props {
    children: string
    to: string
}

export default function Navegacao({ children, to }: Props) {

    const localizacao = useLocation();

    return (
        <nav>
            <Link className={`
            ${styles.link}
            ${localizacao.pathname === to ? styles.linkDestacado : ""}
        `} to={to}>
                {children}
            </Link>
        </nav>
    )
}
