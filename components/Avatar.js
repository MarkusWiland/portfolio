import styles from '../styles/Avatar.module.css'
export default function Avatar({ name, picture }) {
    return (
      <div className={styles.avatar}>
        <img src={picture}  alt={name} />
        <p> skriven av {name}</p>
      </div>
    )
  }