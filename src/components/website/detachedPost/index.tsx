import Image from "next/image";
import styles from './detachedPost.module.scss';
import building from './building.png';
import chevron from './chevron-right.svg';

export default function DetachedPost(){
    return (
        <div className={styles.detachedPost}>
            <article>
                <h2>Featured Post</h2>
            </article>
            <article>
                <div>
                    <div>
                        <Image src={building} alt="Imagem de Destaque"/>
                    </div>
                    <h3>By <span>John Doe</span> | May 23, 2022</h3>
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</h2>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                    <button>Read More <Image src={chevron} alt="Leia mais!"/></button>
                </div>
            </article>
        </div>
    )
}