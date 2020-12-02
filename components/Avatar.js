import styles from '../styles/Avatar.module.css'
import Link from 'next/link'
export default function Avatar({ name, picture }) {
  return (
    <div className={styles.avatar}>
      <img src={picture} alt={name} />
      <span>
        skriven av:
        <Link href='/about'>
          <strong className={styles.name}> {name}</strong>
        </Link>
      </span>
    </div>
  )
}
