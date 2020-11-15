import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Layout from '../../components/Layout'
import { getAllPortfolioSlug, getPostAndMorePortfolio } from '../../lib/api'

export default function PortfolioPost({post}) {
    console.log(post)
    const router = useRouter()
    if(!router.isFallback && !post?.slug){
        return <ErrorPage statusCode={404} />
    }
    return (
        <Layout>
            {router.isFallback ? (
                <h1>Loading...</h1>
            ) : (
                <div className="section">
                    
              <p>{post.name}</p>
              <p>{post.excerpt}</p>
              <p>{post.link.description}</p>
                    
              
                </div>
            )}
        </Layout>
    )
}


export async function getStaticProps({ params }) {
    const data = await getPostAndMorePortfolio(params.slug)
    return {
      props: {
        post: data[0]
      },
    }
  }
  
  export async function getStaticPaths() {
    const allPosts = await getAllPortfolioSlug()
    return {
      paths:
        allPosts?.map((post) => ({
          params: {
            slug: post.slug,
          },
        })) || [],
      fallback: true,
    }
  }