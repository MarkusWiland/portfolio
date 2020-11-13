import Link from 'next/link'
import styles from '../styles/Header.module.css'
export default function Header() {
    return (
        <div className={styles.navbar}>
        <div className={styles.navbar__navigation}>
           <header className={styles.navbar__header}>
               <Link href="/">
               <h3 className={styles.navbar__logo}>Wiland <span className={styles.navbar__media}>Media</span></h3>
               </Link>
               <nav className={styles.navbar__nav}> 
                   <ul className={styles.navbar__ul}>
                       <Link href="/"><li className={styles.navbar__li}><a>Start</a></li></Link>
                       <Link href="/blog"><li className={styles.navbar__li}><a>Blogg</a></li></Link>
                       <Link href="/portfolio"><li className={styles.navbar__li}><a>Portfolio</a></li></Link>
                       <Link href="/about"><li className={styles.navbar__li}><a>Om Mig</a></li></Link>
                       <Link href="/contact"><li className={styles.navbar__li}><a>Kontakta Mig</a></li></Link>
                   </ul>
               </nav>
           </header>
           </div>           
        </div>
    )
}
