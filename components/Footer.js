import { FaInstagram, FaTwitter, FaTwitch, FaLinkedin } from 'react-icons/fa';
export default function Footer() {
    return (
        <>
        <hr className="hr" />
        <footer className="footer">
            <div className="footer__content">
                <div className="social__follow">
                  <p className="social__follow__text">Markus WIland</p>
                  <div className="socialMedia text-center">
                    <div><a href="#"><FaInstagram size={30} color="#DD2A7B"/></a></div>
      <div><a href="#"><FaTwitter size={30} color="#1DA1F2"/></a></div>
      <div><a href="#"><FaTwitch size={30} color="#6441a5 "/></a></div>
      <div><a href="#"><FaLinkedin size={30} color="#2867B2"/></a></div>
                    </div>
                </div>
                <p>Byggd i <a href="#" className="home__anchor">Vercel</a>med <a href="#"className="home__anchor">Sanity</a> som CMS och deployad på <a href="#" className="home__anchor">Vercel</a> </p>
            </div>
    <style jsx scoped>{`
    .footer {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 2rem;
        align-items: center;
    }
    .social__follow__text {
        font-size: 2.3rem;
        text-align: center;
    }
    .flex {
        justify-content: center;
    }
    .text-center {
        justify-content: center;
    }
    `}</style>
        </footer>
        </>
    )
}
