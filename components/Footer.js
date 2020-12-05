import SocialMedia from './SocialMedia'
export default function Footer() {
  return (
    <>
      <hr className='hr' />
      <footer className='footer'>
        <div className='footer__content'>
          <div className='social__follow'>
            <h2 className='social__follow__text'>@ markuswiland.se</h2>
            <div className='socialMedia text-center'>
              <SocialMedia
                size={30}
                instagram={'#DD2A7B'}
                twitter={'#1DA1F2'}
                twitch={'#6441a5'}
                linkedin={'#2867B2'}
              />
            </div>
          </div>
          <p>
            Byggd i
            <a href='https://nextjs.org/' className='home__anchor'>
              Next.js
            </a>
            med
            <a href='https://www.sanity.io/' className='home__anchor'>
              Sanity
            </a>
            som CMS och deployad på
            <a href='https://vercel.com/' className='home__anchor'>
              Vercel
            </a>
          </p>
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
          @media screen and (max-width: 1000px) and (min-width: 375px) {
            .footer__content > p:first-of-type {
              text-align: center;
            }
          }
        `}</style>
      </footer>
    </>
  )
}
