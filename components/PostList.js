import Link from 'next/link'
import styles from '../styles/Postlist.module.css'
export default function PostList({author, excerpt, coverImage, date, title, slug}) {
    return (
        
        <div className={styles.postlist}>
        <div className={styles.bloggpost} >
            <picture className={styles.postlist__image}>
            <img src={coverImage} className={styles.coverImage}/>
      </picture>
          
            
            <div className={styles.postlist__content}>
            <Link as={`/blog/${slug}`} href="/blog/[slug]"><h1 className={styles.title}>{title}</h1></Link>
            <p className={styles.excerpt}>{excerpt}</p>
            <p className={styles.date}>skriven av <strong>{author.name}</strong> den {new Date(date).toLocaleDateString('sv-SV')}</p>
           </div>
           </div>
        </div>
        
    )
}
