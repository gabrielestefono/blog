import Link from 'next/link';
import styles from './sidemenu.module.scss';

export default function SideMenu({open}: Readonly<{open: boolean}>){
    return (
        <aside className={`${styles.sidemenu} ${open ? styles.show : ''}`}>
            <ul>
                <li><Link href="/" aria-label="Home">Home</Link></li>
                <li><Link href="/" aria-label="Blog">Blog</Link></li>
                <li><Link href="/" aria-label="About Us">About Us</Link></li>
                <li><Link href="/" aria-label="Contact Us">Contact Us</Link></li>
                <li><button aria-label="Subscribe to our Newsletter" title='Subscribe to our Newsletter'>Subscribe</button></li>
            </ul>
        </aside>
    )
}