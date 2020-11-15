import Layout from '../components/Layout'
import { getAllPortfolios } from '../lib/api'
import Head from 'next/head'
export default function portfolio({ allPosts }) {
  const posts = allPosts
  return (
    <Layout>
      <Head>
        <title>Portfolio | Wiland Media</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section className='section'>
        <h1>Portfolio</h1>
        <hr className='hr' />
        <main className='section'>
          <div className='grid'>
            {posts &&
              posts.map((portfolio) => (
                <div className='gridbox' key={portfolio._id}>
                  <img src={portfolio.coverImage} className='gridbox__image' />
                  <h3>{portfolio.name}</h3>
                  <div className='gridbox__content'>
                    <p>{portfolio.excerpt}</p>
                    <button href={portfolio.link.href} className='button'>
                      GÅ TILL {portfolio.link.description}
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </main>
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
          .gridbox__image {
            width: 100%;
            object-fit: cover;
            height: 200px;
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
