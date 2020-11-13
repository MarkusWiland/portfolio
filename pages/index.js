import Head from 'next/head'
import { getThreeLatestPosts } from '../lib/api'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import PostList from '../components/PostList'
export default function Home({ allPosts }) {
  const posts = allPosts
  console.log(posts.content)
  return (
    <>
    <Layout>
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
<div className={styles.hero}>
  <div className={styles.hero__content}>
    <h1>Markus Wiland</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum consequatur voluptatum aut tenetur! Similique at, totam, beatae, deleniti distinctio nulla voluptatum molestiae odio repellat quisquam veritatis fugit eum porro laborum.</p>
  </div>
  <div className={styles.hero__headshot}>
    <img src="/images/headshot.jpg" alt="logo" unsized className={styles.headshotImage}/>
  </div>
</div>
      <main className={styles.main}>
        <h1>Markus Wiland</h1>
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