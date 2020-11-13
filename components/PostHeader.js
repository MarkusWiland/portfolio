export default function PostHeader({title, coverImage, date, excerpt}) {
    return (
      <>
      <header>
          <h1>{title}</h1>
          <p>{new Date(date).toLocaleDateString('sv-SV')}</p>
          <img src={coverImage} className="coverImage"/>
    <p className="excerpt">{excerpt}</p>
      </header>
      <style jsx scoped>
      {`
      .coverImage {
        width: 100%;
        height: 300px;
        margin: 2rem 0;
      }
      .excerpt {
        font-weight: bold;
        font-size: large;
        margin-bottom: 1rem;
      }
      `}
          </style>
    </>
    )
}
