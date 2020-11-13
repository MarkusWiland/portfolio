export default function PostHeader({title, coverImage, date}) {
    return (
      <header>
          <h1>{title}</h1>
          <p>{date}</p>
          <img src={coverImage} />
      </header>
    )
}
