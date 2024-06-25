import Image from "next/image";
import chevron from './chevron-right.svg';
import styles from './history.module.scss';
import people from './people.png';

export default function History(){
    return (
        <section className={styles.history}>
            <div>
                <div>
                    <Image src={people} alt=""/>
                </div>
                <div>
                    <h3>Why we started</h3>
                    <h2>It started out as a simple idea and evolved into our passion</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                    <button>Discover our story
                        <Image src={chevron} alt="Leia mais!"/>
                    </button>
                </div>
            </div>
        </section>
    )
}