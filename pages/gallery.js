import Layout from '../components/Layout'
import Head from 'next/head'
import { getAllGallery } from '../lib/api'
export default function gallery({ allGallery }) {
  console.log(allGallery)
  return (
    <Layout>
      <Head>
        <title>Gallery | Markus Wiland</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>Gallery</h1>
      <hr className='hr' />
      <h3>Under konstruktion</h3>

      <style jsx scoped>
        {`
          .gallery {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-gap: 10px;
          }
          .gallery-image {
            border: 3px solid #eee;
            height: 300px;
            position: relative;
          }
          .gallery-image > img {
            width: 100%;
            height: 100%;
            opacity: 0.7;
            object-fit: cover;
          }
          .gallery-image > img:hover {
            opacity: 1;
          }
          .gallery-h1 {
            position: absolute;
            top: 50%;
            z-index: 10;
            color: white;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        `}
      </style>
    </Layout>
  )
}

export async function getStaticProps() {
  const allGallery = await getAllGallery()
  return {
    props: {
      allGallery
    }
  }
}
