import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'
import Layout from '../../components/Layout'
import styles from '../../styles/slug.module.css'
import PostHeader from '../../components/PostHeader'
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api'
import PostBody from '../../components/PostBody'
import MoreStories from '../../components/MoreStories'
import PostFooter from '../../components/PostFooter'
export default function Post({ post, morePosts }) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout>
      {router.isFallback ? (
        <h1>Loading...</h1>
      ) : (
        <div className='section'>
          <Head>
            <title></title>
          </Head>
          <PostHeader title={post.title} coverImage={post.coverImage} date={post.date} excerpt={post.excerpt} />
          <div className={styles.postBody}>
            <PostBody content={post.body} />
          </div>
          <PostFooter author={post.author} />
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </div>
      )}
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const data = await getPostAndMorePosts(params.slug)
  return {
    props: {
      post: data?.post || null,
      morePosts: data?.morePosts || null
    }
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug()
  return {
    paths:
      allPosts?.map((post) => ({
        params: {
          slug: post.slug
        }
      })) || [],
    fallback: true
  }
}
