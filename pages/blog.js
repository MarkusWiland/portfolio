import { getAllPostsFromHome } from '../lib/api'
import Head from 'next/head'
import Layout from "../components/Layout"
export default function blog({allPosts}) {
    const posts = allPosts
    return (
        <Layout>
              <Head>
        <title>Wiland Media - Blogg</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
            <h1>Blogg</h1>
            <hr className="hr" />
        <section className="section">
            {posts.map((post) => (
                <h2 key={post._id}>{post.title}</h2>
            ))}
        </section>
        </Layout>
    )
}

export async function getStaticProps() {
    const allPosts = await getAllPostsFromHome()
    return {
      props: {
        allPosts
      }
    }
  }