import Link from 'next/link'
import styles from '../styles/Postlist.module.css'
export default function PortfolioList({ href, excerpt, coverImage, description, name, slug }) {
  console.log(href, description)
  return (
    <Link as={`/portfolio/${slug}`} href='/portfolio/[slug]'>
      <div className={styles.postlist__container}>
        <div className={styles.postlist}>
          <div className={styles.bloggpost}>
            <div className={styles.postlist__image}>
              <img src={coverImage ? coverImage : 'images/saknas.png'} className={styles.coverImage} />
            </div>
            <div className={styles.postlist__content}>
              <h3 className={styles.title}>{name}</h3>
              <p className={styles.excerpt}>{excerpt}</p>
              <p className={styles.excerpt}>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
