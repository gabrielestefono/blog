import Image from 'next/image';
import styles from './about.module.scss';
import chevron from './chevron-right.svg';

export default function AboutSharedComponent() {
  return (
    <div className={styles.about}>
      <h3>ABOUT US</h3>
      <h2>We are a community of content writers who share their learnings</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <a href="/">Read More <Image src={chevron} alt="Read More!" /></a>
    </div>
  );
}
