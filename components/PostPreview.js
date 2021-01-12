import Link from 'next/link'
import Avatar from '../components/Avatar'
import Image from 'next/image'
const letters = (word, n) => {
  return word.length > n ? word.substring(0, n - 1) + '...' : word
}
export default function PostPreview({ slug, name, date, coverImage, title, picture, excerpt }) {
  return (
    <>
      <Link as={`/blog/${slug}`} href='/blog/[slug]'>
        <div className='postPreview'>
          <Image src={coverImage} alt='header picture' layout='responsive' priority={true} height={500} width={1200} />
          <h4 className='h4'>{title}</h4>
          <p>{new Date(date).toLocaleDateString('sv-SV')}</p>
          <p>{letters(excerpt, 50)}</p>
          <Avatar name={name} picture={picture} />
        </div>
      </Link>
      <style jsx scoped>{`
        .postPreview {
          background-color: #f7f7f7;
          cursor: pointer;
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
