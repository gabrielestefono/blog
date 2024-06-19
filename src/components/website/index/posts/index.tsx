import DetachedPost from '../../detachedPost';
import ListPost from '../../listPost';
import styles from './posts.module.scss';

export default function Posts(){
    return(
        <section  className={styles.posts}>
            <div>
                <DetachedPost/>
                <ListPost/>
            </div>
        </section>
    )
}