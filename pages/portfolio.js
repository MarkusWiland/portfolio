import Layout from '../components/Layout'
import { getAllPortfolios } from '../lib/api'
import Head from 'next/head'
import Image from 'next/image'
export default function portfolio({ allPosts }) {
  const posts = allPosts
  return (
    <Layout>
      <Head>
        <title>Portfolio | Markus Wiland</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h3 className='text-center'>Programmer, designer, creator</h3>
      <h1>Portfolio</h1>
      <hr className='hr' />
      <section className='section'>
        <div className='grid'>
          {posts &&
            posts.map((portfolio) => (
              <div className='gridbox' key={portfolio._id}>
                <Image src={portfolio.coverImage} height={200} width={300} />
                <h3>{portfolio.name}</h3>
                <div className='gridbox__content'>
                  <p>{portfolio.excerpt}</p>
                  <p>Gjort med wordpress</p>
                  <button href={portfolio.link.href} className='button'>
                    GÅ TILL {portfolio.link.description}
                  </button>
                </div>
              </div>
            ))}
        </div>
      </section>
      <style jsx scoped>
        {`
          .grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, 280px);
            grid-gap: 20px;

            justify-content: center;
          }
          .gridbox {
            background-color: #eee;
          }
          .gridbox > h3 {
            text-align: center;
          }
          .gridbox__content {
            padding: 1rem;
            display: grid;
            grid-template-rows: 1fr 1fr;
          }
          .gridbox__content > p {
            line-height: 1.5rem;
            flex: 1;
          }
          .button {
            padding: 0.5rem;
            width: 100%;
            margin-top: 1rem;
            cursor: pointer;
          }
        `}
      </style>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPosts = await getAllPortfolios()
  return {
    props: {
      allPosts
    }
  }
}
