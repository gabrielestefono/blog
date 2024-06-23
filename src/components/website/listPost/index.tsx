import Link from "next/link";
import ListPostCard from "./listPostCard";
import styles from './listPost.module.scss';

export default function ListPost(){
    return (
        <div className={styles.listPost}>
            <section>
                <h2>All Posts</h2>
                <Link href="/blog">View All</Link>
            </section>
            <section>
                <ListPostCard/>
                <ListPostCard/>
                <ListPostCard/>
                <ListPostCard/>
            </section>
        </div>
    )
}