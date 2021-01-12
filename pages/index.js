import Head from 'next/head'
import { getThreeLatestPosts, getThreeLatestPortfolios, getThreeLatestIntervjuer } from '../lib/api'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import PostList from '../components/PostList'
import PortfolioList from '../components/PortfolioList'
import Link from 'next/link'
import SocialMedia from '../components/SocialMedia'
import IntervjuerList from '../components/IntervjuerList'
export default function Home({ allPosts, threeLatestPortfolios, threeLatestIntervjuer }) {
  const posts = allPosts
  const letters = (word, n) => {
    return word.length > n ? word.substring(0, n - 1) + '...' : word
  }
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
                <Link href='/intervjuer'>
                  <a className='home__anchor'>Intervjuer</a>
                </Link>
              </h2>
              <div className='flex'>
                {threeLatestIntervjuer &&
                  threeLatestIntervjuer.map((post) => (
                    <IntervjuerList
                      key={post._id}
                      author={post.author}
                      coverImage={post.coverImage}
                      excerpt={post.excerpt}
                      date={post.date}
                      title={post.title}
                      slug={post.slug}
                    />
                  ))}
              </div>
            </section>
            <section className='section'>
              <h2 className='h2'>
                Tre senaste
                <Link href='/blog'>
                  <a className='home__anchor'>blogginlägg</a>
                </Link>
              </h2>
              <div className='flex'>
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
              </div>
            </section>
            <section className='section'>
              <h2 className='h2'>
                Tre senaste
                <Link href='/portfolio'>
                  <a className='home__anchor'>Portfolio</a>
                </Link>
              </h2>
              <div className='flex'>
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
              </div>
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
  const threeLatestIntervjuer = await getThreeLatestIntervjuer()
  return {
    props: {
      allPosts,
      threeLatestPortfolios,
      threeLatestIntervjuer
    }
  }
}
