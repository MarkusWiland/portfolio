import Link from 'next/link'
import styles from '../styles/Postlist.module.css'
export default function PostList({ author, excerpt, coverImage, date, title, slug }) {
  console.log(date)
  return (
    <Link as={`/blog/${slug}`} href='/blog/[slug]'>
      <div className={styles.postlist__container}>
        <div className={styles.postlist}>
          <div className={styles.bloggpost}>
            <div className={styles.postlist__image}>
              <img src={coverImage} className={styles.coverImage} />
            </div>
            <div className={styles.postlist__content}>
              <h3 className={styles.title}>{title}</h3>
              <p className={styles.excerpt}>{excerpt}</p>
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
