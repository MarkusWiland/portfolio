import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { getGalleryid } from '../../lib/api'
import Head from 'next/head'
import Layout from '../../components/Layout'
export default function galleryPost({ allPosts }) {
  console.log(allPosts)
  const router = useRouter()

  return (
    <Layout>
      {router.isFallback ? (
        <h1>Loading...</h1>
      ) : (
        <div className='section'>
          <Head>
            <title></title>
          </Head>
          <h1>Gallery</h1>
        </div>
      )}
    </Layout>
  )
}
// export async function getStaticProps({ params }) {
//   const data = await getPostAndMorePosts(params.slug)
//   return {
//     props: {
//       post: data?.post || null,
//       morePosts: data?.morePosts || null
//     }
//   }
// }

// export async function getStaticPaths() {
//   const allPosts = await getGalleryid()
//   console.log(allPosts)
//   return {
//     paths:
//       allPosts?.map((post) => ({
//         params: {
//           id: post._id
//         }
//       })) || [],
//     fallback: true
//   }
// }
