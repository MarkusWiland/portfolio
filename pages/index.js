import Head from 'next/head'
import { getThreeLatestPosts, getThreeLatestPortfolios } from '../lib/api'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import PostList from '../components/PostList'
import PortfolioList from '../components/PortfolioList'
import Link from 'next/link'
import SocialMedia from '../components/SocialMedia'
export default function Home({ allPosts, threeLatestPortfolios }) {
  const posts = allPosts
  return (
    <>
      <Layout>
        <div className={styles.container}>
          <Head>
            <title>Markus Wiland</title>
            <link rel='icon' href='/favicon.ico' />
          </Head>
          <div className={styles.hero}>
            <div className={styles.heroInfo}>
              <h2>Hej, jag heter Markus Wiland</h2>
              <p className={styles.hero__p}>
                Jag är en driven kille som gillar att utvecklas och vill alltid lära mig nya saker. Jag studerar just nu
                Front End Developer på IT-Högskolan i Göteborg och tar examen sommaren 2021.
              </p>

              <div className='socialMedia'>
                <SocialMedia
                  size={30}
                  instagram={'#DD2A7B'}
                  twitter={'#1DA1F2'}
                  twitch={'#6441a5'}
                  linkedin={'#2867B2'}
                  className='socialMedia'
                />
              </div>
            </div>
            <div className={styles.hero__headshot}>
              <img src='/images/headshot.jpg' alt='logo' className={styles.headshotImage} />
            </div>
          </div>
          <main>
            <section className='section'>
              <h2 className='h2'>
                Tre senaste
                <Link href='/blog'>
                  <a className='home__anchor'>blogginlägg</a>
                </Link>
              </h2>
              {posts &&
                posts.map((post) => (
                  <PostList
                    key={post._id}
                    author={post.author}
                    coverImage={post.coverImage}
                    excerpt={post.excerpt}
                    date={post.date}
                    title={post.title}
                    slug={post.slug}
                  />
                ))}
            </section>
            <section className='section'>
              <h2 className='h2'>
                Tre senaste
                <Link href='/portfolio'>
                  <a className='home__anchor'>Portfolio</a>
                </Link>
              </h2>
              {threeLatestPortfolios &&
                threeLatestPortfolios.map((post) => (
                  <PortfolioList
                    key={post._id}
                    slug={post.slug}
                    coverImage={post.coverImage}
                    excerpt={post.excerpt}
                    name={post.name}
                    href={post.link.href}
                    description={post.link.description}
                  />
                ))}
            </section>
          </main>
        </div>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = await getThreeLatestPosts()
  const threeLatestPortfolios = await getThreeLatestPortfolios()
  return {
    props: {
      allPosts,
      threeLatestPortfolios
    }
  }
}
