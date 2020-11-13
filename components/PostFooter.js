import Avatar from "./Avatar";
import styles from '../styles/Footer.module.css'
export default function PostFooter({author}) {
    return (
        <footer className={styles.footer}>
             <Avatar name={author?.name} picture={author?.picture}/>
        </footer>
    )
}
