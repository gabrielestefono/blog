import styles from './titleMiddle.module.scss';

interface TitleMiddleProps{
    text: string
}

export default function TitleMiddle({ text }: Readonly<TitleMiddleProps>){
    return (
        <h2 className={styles.title}>{text}</h2>
    )
}