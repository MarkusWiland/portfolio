import Link from 'next/link'
import Avatar from '../components/Avatar'
const letters = (word, n) => {
  return word.length > n ? word.substring(0, n - 1) + '...' : word
}
export default function PostPreview({ slug, name, date, coverImage, title, picture, excerpt }) {
  return (
    <>
      <Link as={`/blog/${slug}`} href='/blog/[slug]'>
        <div className='postPreview'>
          <img src={coverImage} className='coverImage' />
          <h4 className='h4'>{title}</h4>
          <p>{date}</p>
          <p>{letters(excerpt, 50)}</p>
          <Avatar name={name} picture={picture} />
        </div>
      </Link>
      <style jsx scoped>{`
        .postPreview {
          background-color: #f7f7f7;
          cursor: pointer;
        }
        .coverImage {
          width: 100%;
          object-fit: cover;
          height: 250px;
        }
        .h4 {
          padding: 1rem 0;
          font-size: 2rem;
        }
        .h4:hover {
          text-decoration: underline;
        }
      `}</style>
    </>
  )
}
