import Image from 'next/image';
import styles from './category.module.scss';
import icon from './Icon.png';

interface CategoryProps{
    image: string;
    title: string;
    description: string;
}

export default function Category({image, title, description}: Readonly<CategoryProps>){
    return(
        <div className={styles.category}>
            <Image src={icon} alt='Ícone da categoria'/>
            <h3>Business</h3>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p> 
        </div>
    )
}