import Link from 'next/link';
import styles from './header.module.scss';
import Image from 'next/image';
import bars from './bars.svg';
import barsStaggered from './bars-staggered.svg';
import { useState } from 'react';
import SideMenu from './sidemenu';

export default function Header(){

	const [open, setOpen] = useState<boolean>(false)

	return (
		<header className={styles.header}>
			<div>
				<div>
					<Link href="/" aria-label='WeBest'>WeBest</Link>
				</div>
				<ul>
					<li><Link href="/" aria-label="Home">Home</Link></li>
					<li><Link href="/" aria-label="Blog">Blog</Link></li>
					<li><Link href="/" aria-label="About Us">About Us</Link></li>
					<li><Link href="/" aria-label="Contact Us">Contact Us</Link></li>
					<li><button aria-label="Subscribe to our Newsletter" title='Subscribe to our Newsletter'>Subscribe</button></li>
				</ul>
				<button onClick={()=>{setOpen(!open)}} aria-label="Toogle Menu" title='Toogle Menu'>
					<Image src={open ? barsStaggered : bars} alt='Menu bars'/>
				</button>
			</div>
			<SideMenu open={open}/>
		</header>
	)
}