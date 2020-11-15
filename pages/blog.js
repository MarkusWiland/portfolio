import { getAllPostsFromHome } from '../lib/api'
import Head from 'next/head'
import Layout from "../components/Layout"
import PostList from '../components/PostList'
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
        {posts && posts.map((post) => (
  <PostList key={post._id} author={post.author} coverImage={post.coverImage} excerpt={post.excerpt} date={post.date} title={post.title} slug={post.slug}/>
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