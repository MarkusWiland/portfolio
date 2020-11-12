import Link from 'next/link'
export default function PostList({author, excerpt, coverImage, date, title, slug}) {
    return (
        <div>
            <Link as={`/blog/${slug}`} href="/blog/[slug]"><h1>{title}</h1></Link>
            <p>{author.name}</p>
            <p>{excerpt}</p>
        </div>
    )
}
