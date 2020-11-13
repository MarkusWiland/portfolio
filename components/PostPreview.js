import Link from 'next/link'
import imageUrlBuilder from '@sanity/image-url'
function urlFor (source) {
    return imageUrlBuilder(client).image(source)
  }
export default function PostPreview({slug, title, coverImage, excerpt}) {
    return (
        <div className="postPreview">
            <img src={coverImage} className="coverImage"/>
            <Link as={`/blog/${slug}`} href="/blog/[slug]">
            <a>{title}</a>
            </Link>
           {excerpt}
         
    <style jsx scoped>{`
    .postPreview {
        background-color: #eee;
    }
    .coverImage {
        width: 100%;
        height: 200px;
    }
    `}</style>
        </div>
    )
}
