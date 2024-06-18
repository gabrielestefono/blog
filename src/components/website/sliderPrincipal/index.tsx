import { register } from 'swiper/element/bundle';
import chevron from './chevron-right.svg';
import styles from './sliderPrincipal.module.scss';
import Image from 'next/image';

export default function SliderPrincipal(){
    register();
    return(
        <swiper-container slides-per-view="1" speed="200" loop="true">
            <swiper-slide>
                <div className={styles.swiper}>
                    <div>
                        <h3>Posted On <span>Startup</span></h3>
                        <h1>Step-by-step guide to choosing great font pairs</h1>
                        <h2>By <span>James West</span> |  May 23, 2022</h2>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                        <button>Read More <Image src={chevron} alt="Leia mais!"/></button>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div className={styles.swiper}>
                    <div>
                        <h3>Posted On <span>Startup</span></h3>
                        <h1>Step-by-step guide to choosing great font pairs</h1>
                        <h2>By <span>James West</span> |  May 23, 2022</h2>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                        <button>Read More <Image src={chevron} alt="Leia mais!"/></button>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div className={styles.swiper}>
                    <div>
                        <h3>Posted On <span>Startup</span></h3>
                        <h1>Step-by-step guide to choosing great font pairs</h1>
                        <h2>By <span>James West</span> |  May 23, 2022</h2>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                        <button>Read More <Image src={chevron} alt="Leia mais!"/></button>
                    </div>
                </div>
            </swiper-slide>
        </swiper-container>
    )
}