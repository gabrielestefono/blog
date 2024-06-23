import AboutSharedComponent from '@/components/shared/components/about';
import styles from './about.module.scss';

export default function About(){
    return (
        <section className={styles.about}>
            <div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div>
                <AboutSharedComponent/>
                <AboutSharedComponent/>
            </div>
        </section>
    )
}