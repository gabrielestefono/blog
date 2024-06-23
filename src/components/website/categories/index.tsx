import TitleMiddle from '@/components/shared/components/titleMiddle';
import styles from './categories.module.scss';
import Category from './category';

export default function Categories(){
    return (
        <section className={styles.categories}>
            <TitleMiddle text='Choose a Category'/>
            <article>
                <Category title='' image='' description=''/>
                <Category title='' image='' description=''/>
                <Category title='' image='' description=''/>
                <Category title='' image='' description=''/>
            </article>
        </section>
    )
}