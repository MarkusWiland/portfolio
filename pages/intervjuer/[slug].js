import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'
import Layout from '../../components/Layout'
import styles from '../../styles/slug.module.css'
import PostHeader from '../../components/PostHeader'
import { getAllIntervjuerWithSlug, getIntervjuerAndMoreIntervjuer } from '../../lib/api'
import PostBody from '../../components/PostBody'
import MoreStories from '../../components/MoreStories'
import PostFooter from '../../components/PostFooter'
export default function Intervjuer({ intervjuer, moreIntervjuer }) {
  const router = useRouter()
  if (!router.isFallback && !intervjuer?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout>
      {router.isFallback ? (
        <h1>Loading...</h1>
      ) : (
        <div className='section'>
          <Head>
            <title>Intervjuer</title>
          </Head>
          <PostHeader
            title={intervjuer.title}
            coverImage={intervjuer.coverImage}
            date={intervjuer.date}
            excerpt={intervjuer.excerpt}
          />
          <div className={styles.postBody}>
            <PostBody content={intervjuer.body} />
          </div>
          <PostFooter author={intervjuer.author} />
          {moreIntervjuer.length > 0 && <MoreStories posts={moreIntervjuer} />}
        </div>
      )}
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const data = await getIntervjuerAndMoreIntervjuer(params.slug)

  return {
    props: {
      intervjuer: data?.intervjuer || null,
      moreIntervjuer: data?.moreIntervjuer || null
    }
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllIntervjuerWithSlug()

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
