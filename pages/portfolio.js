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
                <img src={portfolio.coverImage ? portfolio.coverImage : 'images/saknas.png'} height={200} width={300} />
                <h3>{portfolio.name}</h3>
                <div className='gridbox__content'>
                  <p>{portfolio.excerpt}</p>
                  <p>Gjort med wordpress</p>
                  <p>{portfolio.link.href}</p>
                  <span className='button'>
                    GÅ TILL <a href={`${portfolio.link.href}`}>{portfolio.link.description}</a>
                  </span>
                </div>
              </div>
            ))}
        </div>
      </section>
      <style jsx scoped>
        {`
          .grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
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
            text-align: center;
            border: 1px solid #000000;
            margin-top: 1rem;
            cursor: pointer;
          }
          .button > a {
            text-transform: uppercase;
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
