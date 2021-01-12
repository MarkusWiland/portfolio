import Link from 'next/link'
import styles from '../styles/Postlist.module.css'
import Image from 'next/image'
export default function IntervjuerList({ author, excerpt, coverImage, date, title, slug }) {
  const letters = (word, n) => {
    return word.length > n ? word.substring(0, n - 1) + '...' : word
  }
  return (
    <Link as={`/intervjuer/${slug}`} href='/intervjuer/[slug]'>
      <div className={styles.postlist__container}>
        <div className={styles.postlist}>
          <div className={styles.bloggpost}>
            <Image
              src={coverImage ? coverImage : 'images/saknas.png'}
              alt='header picture'
              layout='responsive'
              priority={true}
              height={500}
              width={1200}
            />

            <div className={styles.postlist__content}>
              <h3 className={styles.title}>{title}</h3>
              <p className={styles.excerpt}>{letters(excerpt, 70)}</p>
              <p className={styles.date}>
                skriven av <strong>{author.name}</strong> den {new Date(date).toLocaleDateString('sv-SV')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
