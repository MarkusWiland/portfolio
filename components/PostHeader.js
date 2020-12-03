import Image from 'next/image'
export default function PostHeader({ title, coverImage, date, excerpt }) {
  return (
    <>
      <header>
        <h1 className='h1'>{title}</h1>
        <p>{new Date(date).toLocaleDateString('sv-SV')}</p>
        <div className='coverImage'>
          <img src={coverImage} height='500px' width='1200px' />
        </div>
        <p className='excerpt'>{excerpt}</p>
      </header>
      <style jsx scoped>
        {`
          .coverImage {
            margin: 2rem 0;
          }
          .excerpt {
            font-weight: bold;
            font-size: larger;
            margin-bottom: 1rem;
          }
          h1 {
            font-size: 3rem;
          }
        `}
      </style>
    </>
  )
}
