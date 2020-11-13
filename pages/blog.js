import { getAllPostsFromHome } from '../lib/api'
import Layout from "../components/Layout"
export default function blog({allPosts}) {
    const posts = allPosts
    return (
        <Layout>
        <div>
            {posts.map((post) => (
                <h1>{post.title}</h1>
            ))}
        </div>
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