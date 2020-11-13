import { FaInstagram, FaTwitter, FaTwitch, FaLinkedin } from 'react-icons/fa';
export default function SocialMedia({size, instagram, twitter, twitch, linkedin}) {
    return (
       <>
        <div><a href="#"><FaInstagram size={size} color={instagram}/></a></div>
        <div><a href="#"><FaTwitter size={size} color={twitter}/></a></div>
        <div><a href="#"><FaTwitch size={size} color={twitch}/></a></div>
        <div><a href="#"><FaLinkedin size={size} color={linkedin}/></a></div>
      </>
    )
}
