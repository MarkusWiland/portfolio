export default function PostHeader({title, coverImage, date}) {
    return (
      <header>
          <p>{title}</p>
          <p>{date}</p>
      </header>
    )
}
