import styles from './Rodape.module.css'

export default function Rodape() {
    return (
        <footer className={styles.rodape}>
            <section className={styles.rodape__redes}>
                <h5>Redes do criador</h5>
                <ul className={styles.lista__redes}>
                    <li><a href='https://github.com/MarcosGardinali' target='_blank' rel="noreferrer"><img src='https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white' alt='Selo do Github' title='Selo do Github'/></a></li>
                    <li><a href='https://www.linkedin.com/in/marcos-gardinali/' target='_blank' rel="noreferrer"><img src='https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white' alt='Selo do Linkedin' title='Selo do Linkedin'/></a></li>
                    <li><a href='https://portfolio-marcosgardinali.vercel.app/' target='_blank' rel="noreferrer"><img src='https://img.shields.io/badge/Portfolio-%23000000.svg?style=for-the-badge&logo=firefox&logoColor=#FF7139' alt='Selo de Portfólio' title='Selo do Portfólio'/></a></li>
                </ul>
            </section>
            <section className={styles.rodape__info}>
                <h5>O que é o Espaço Receitas?</h5>
                <article>
                    <p>
                        O Espaço Receitas é um ponto de encontro online para entusiastas culinários de todos os níveis! Aqui, celebramos a arte da gastronomia e o prazer de compartilhar sabores únicos. Nosso site é um tesouro de criações culinárias, onde os amantes da cozinha podem explorar uma ampla variedade de receitas deliciosas.
                    </p>
                </article>
            </section>
        </footer>
    )
}
