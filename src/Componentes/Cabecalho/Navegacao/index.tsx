import styles from './Navegacao.module.css'
import { Link, useLocation } from 'react-router-dom'

interface Props {
    children: string
    to: string
    onClick: () => void
}

export default function Navegacao({ children, to, onClick }: Props) {

    const localizacao = useLocation();

    return (
        <nav title={children} onClick={onClick}>
            <Link className={`
            ${styles.link}
            ${localizacao.pathname === to ? styles.linkDestacado : ""}
        `} to={to}>
                {children}
            </Link>
        </nav>
    )
}
