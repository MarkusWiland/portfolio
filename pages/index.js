import Head from 'next/head'
import { getThreeLatestPosts } from '../lib/api'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import PostList from '../components/PostList'
import SocialMedia from '../components/SocialMedia'
export default function Home({ allPosts }) {
  const posts = allPosts
  return (
    <>
    <Layout>
    <div className={styles.container}>
      <Head>
        <title>Wiland Media</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
<div className={styles.hero}>
  <div className={styles.hero__content}>
    <h2>Hej, jag är Markus Wiland</h2>
    <p>Jag är en driven kille som gillar att utvecklas och vill alltid lära mig nya saker. Jag studerar just nu Front End Developer på IT-Högskolan i Göteborg och tar examen sommaren 2021.</p>
    <div className="socialMedia">
     <SocialMedia size={50} instagram={'#DD2A7B'} twitter={'#1DA1F2'} twitch={'#6441a5'} linkedin={'#2867B2'}/>
    </div>
  </div>
  <div className={styles.hero__headshot}>
    <img src="/images/headshot.jpg" alt="logo" unsized className={styles.headshotImage}/>
  </div>
</div>
      <main className="section">
      <h2 className="h2">Tre senaste<a href="#" className="home__anchor">blogginlägg</a></h2>
{posts && posts.map((post) => (
  <PostList key={post._id} author={post.author} coverImage={post.coverImage} excerpt={post.excerpt} date={post.date} title={post.title} slug={post.slug}/>
))}
      </main>
    </div>
    </Layout>
    </>
  )
}


export async function getStaticProps() {
  const allPosts = await getThreeLatestPosts()
  return {
    props: {
      allPosts
    }
  }
}