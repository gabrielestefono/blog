import styles from './listPostCard.module.scss';

export default function ListPostCard(){
    return (
        <a href="/a" className={styles.listPostCard}>
            <h3>By <span>John Doe</span> | Aug 23, 2021</h3>
            <h2>8 Figma design systems that you can download for free today.</h2>
        </a>
    )
}