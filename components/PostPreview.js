import Link from 'next/link'
const letters = (word, n) => {
  return word.length > n ? word.substring(0, n - 1) + '...' : word
}
export default function PostPreview({ slug, title, coverImage, excerpt }) {
  return (
    <>
      <Link as={`/blog/${slug}`} href='/blog/[slug]'>
        <div className='postPreview'>
          <img src={coverImage} className='coverImage' />
          <h4>{title}</h4>
          <p>{letters(excerpt, 50)}</p>
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
          height: 200px;
        }
      `}</style>
    </>
  )
}
