import { useState } from 'react';
import styles from './Receitas.module.css'

export default function Receitas() {

    const [receitas] = useState(
        [{
            id: 1,
            imagem: 'https://receitanatureba.com/wp-content/uploads/2017/04/Receita-de-Macarons-Light.jpg',
            titulo: 'Bolachas',
            descricao: 'Bolachas de chocolate e morango caseiras'
        },
        {
            id: 2,
            imagem: 'https://essareceitafunciona.com.br/wp-content/uploads/2022/06/Receita-facil-de-brownie-Essa-Receita-Funciona-7.jpg',
            titulo: "Brownie de Nescau",
            descricao: "Brownie de nescau caseiro"
        }
        ,
        {
            id: 3,
            imagem: 'https://static.itdg.com.br/images/1200-630/71c9dc733ee596adffbece6b0e5b063a/receitas-com-3-ingredientes.jpg',
            titulo: "Pão de Queijo",
            descricao: "Pão de queijo crocante"
        },
        {
            id: 4,
            imagem: 'https://img.freepik.com/fotos-gratis/vista-frontal-deliciosas-batatas-fritas-com-cheeseburgers-em-fundo-escuro-lanche-prato-fast-food-torrada-hamburguer-jantar_140725-158687.jpg',
            titulo: "Lanche de Picanha",
            descricao: "Lanche de picanha com queijo prato"
        },
        {
            id: 5,
            imagem: 'https://cdn0.tudoreceitas.com/pt/posts/2/6/7/lanche_slider_americano_8762_orig.jpg',
            titulo: "Lanche Americano",
            descricao: "Lanche americano de presunto e queijo"
        }
        ],
    );


    return (
        <section className={styles.container__receitas}>
            {receitas.map(receita => (
                <li className={styles.receita} key={receita.id} title={receita.titulo}>
                    <img className={styles.receita__imagem} src={receita.imagem} alt={receita.titulo} />
                    <h5 className={styles.receita__titulo}>{receita.titulo}</h5>
                    <p className={styles.receita__descricao}>{receita.descricao}</p>
                </li>
            ))}
        </section>
    )
}
