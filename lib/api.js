import client from './sanity'
import sanityImage from '@sanity/image-url'

export const imageBuilder = sanityImage(client)

const getUniquePosts = (posts) => {
  const slugs = new Set()
  return posts.filter((post) => {
    if (slugs.has(post.slug)) {
      return false
    } else {
      slugs.add(post.slug)
      return true
    }
  })
}

const postFields = `
  _id,
  name,
  title,
  'date': publishedAt,
  excerpt,
  'slug': slug.current,
  'coverImage': mainImage.asset->url,
  'author': author->{name, 'picture': image.asset->url},
`

export async function getAllPostsFromHome() {
  const results = await client.fetch(`*[_type == "post"] | order(date desc, _updatedAt desc){
        ${postFields}
    }`)
  return getUniquePosts(results)
}
export async function getThreeLatestPosts() {
  const results = await client.fetch(`*[_type == "post"] | order(date desc, _updatedAt desc){
        ${postFields}
    }[0 ... 3]`)
  return getUniquePosts(results)
}
export async function getAllPostsWithSlug() {
  const data = await client.fetch(`*[_type == "post"]{ 'slug': slug.current}`)
  return data
}

export async function getPostAndMorePosts(slug) {
  const currentClient = client
  const [post, morePosts] = await Promise.all([
    currentClient
      .fetch(
        `*[_type == "post" && slug.current == $slug] | order(_updatedAt desc){
        ${postFields}
        body,
    }`,
        { slug }
      )
      .then((res) => res?.[0]),
    currentClient.fetch(
      `*[_type == "post" && slug.current != $slug] | order(date desc, _updatedAt desc){
            ${postFields}
            body, 
        }[0 ... 2]`,
      { slug }
    )
  ])
  return { post, morePosts: getUniquePosts(morePosts) }
}
/* portfolio */
const portfolioFields = `
  _id,
  name,
  excerpt,
  'slug': slug.current,
  'coverImage': mainImage.asset->url,
  'link': link
`

export async function getAllPortfolios() {
  const results = await client.fetch(`*[_type == "portfolio"] | order(date desc, _updatedAt desc){
        ${portfolioFields}
    }`)
  return results
}
export async function getThreeLatestPortfolios() {
  const results = await client.fetch(`*[_type == "portfolio"] | order(date desc, _updatedAt desc){
        ${portfolioFields}
    }[0 ... 3]`)
  return results
}
export async function getAllPortfolioSlug() {
  const data = await client.fetch(`*[_type == "portfolio"]{ 'slug': slug.current}`)
  return data
}
export async function getPostAndMorePortfolio(slug) {
  console.log(slug)
  const currentClient = client
  const post = await currentClient.fetch(
    `*[_type == "portfolio" && slug.current == $slug] | order(_updatedAt desc){
        ${portfolioFields}
    }`,
    { slug }
  )
  return post
}

/* Gallery */
const galleryFields = `
  _id,
  name,
  gallerycategories,
  'coverImage': mainImage.asset->url,
`
export async function getAllGallery() {
  const results = await client.fetch(`*[_type == "gallery"] | order(date desc, _updatedAt desc){
        ${galleryFields}
    }`)
  return results
}
export async function getGalleryid() {
  const data = await client.fetch(`*[_type == "gallery"]{ 'id': id.current }`)
  console.log(data)
  return data
}
