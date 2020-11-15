import { FaInstagram, FaTwitter, FaTwitch, FaLinkedin } from 'react-icons/fa'
export default function SocialMedia({ size, instagram, twitter, twitch, linkedin }) {
  return (
    <>
      <div>
        <a href='https://www.instagram.com/markuswiland/'>
          <FaInstagram size={size} color={instagram} />
        </a>
      </div>
      <div>
        <a href='https://twitter.com/MarkusWiland'>
          <FaTwitter size={size} color={twitter} />
        </a>
      </div>
      <div>
        <a href='https://www.twitch.tv/gamingwiland'>
          <FaTwitch size={size} color={twitch} />
        </a>
      </div>
      <div>
        <a href='https://www.linkedin.com/in/markus-wiland-953315179/'>
          <FaLinkedin size={size} color={linkedin} />
        </a>
      </div>
    </>
  )
}
