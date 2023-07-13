import styles from './subtitle.module.css'

export default function Subtitle({ children }) {
    return (
        <h2 className={styles.subtitle}>{ children }</h2>
    )
}
