import Head from 'next/head'
import { getThreeLatestPosts } from '../lib/api'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import PostList from '../components/PostList'
import { FaInstagram, FaTwitter, FaTwitch, FaLinkedin } from 'react-icons/fa';
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
    <div className="socialMedia">
      <div><a href="#"><FaInstagram size={50} color="#DD2A7B"/></a></div>
      <div><a href="#"><FaTwitter size={50} color="#1DA1F2"/></a></div>
      <div><a href="#"><FaTwitch size={50} color="#6441a5 "/></a></div>
      <div><a href="#"><FaLinkedin size={50} color="#2867B2"/></a></div>
    </div>
  </div>
  <div className={styles.hero__headshot}>
    <img src="/images/headshot.jpg" alt="logo" unsized className={styles.headshotImage}/>
  </div>
</div>
      <main className={styles.main}>
      <h2 className="h2">All post<a href="#" className="home__anchor">blogs</a></h2>
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