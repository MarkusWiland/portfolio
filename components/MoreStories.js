import PostPreview from '../components/PostPreview'
export default function MoreStories({posts}) {
    return (
        <>
        <hr className="hr" />
        <div className="post">
            {posts.map((post)=> (
                <PostPreview key={post._id} slug={post.slug} title={post.title} excerpt={post.excerpt} coverImage={post.coverImage} date={post.date}
                />
            ))}
            <style jsx scoped>{
            `
                .post {
                    display: grid;
                    grid-gap: 10px;
                    padding-top: 2rem;
                    grid-template-columns: repeat(2, 300px);
                    justify-content:center;
                }
            `}</style>
        </div>
        </>
    )
}
