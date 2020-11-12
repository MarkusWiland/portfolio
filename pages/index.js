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

      <main className={styles.main}>
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