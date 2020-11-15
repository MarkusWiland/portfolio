import PostPreview from '../components/PostPreview'
export default function MoreStories({posts}) {
    return (
        <>
        <hr className="hr" />
        <h1 className="h1">Mer Inlägg</h1>
        <div className="MoreStories__post">
            {posts.map((post)=> (
                <PostPreview key={post._id} slug={post.slug} title={post.title} excerpt={post.excerpt} coverImage={post.coverImage} date={post.date}
                />
            ))}
            <style jsx scoped>{
            `
                .MoreStories__post {
                    display: grid;
                    grid-gap: 10px;
                    padding-top: 2rem;
                    grid-template-columns: repeat(2, 300px);
                    justify-content:center;
                }
                .h1 {
                    text-align: center;
                }
            `}</style>
        </div>
        </>
    )
}
