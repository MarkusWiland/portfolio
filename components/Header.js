import Link from '../components/Link'
export default function Header() {
  return (
    <div className='navbar'>
      <div className='navbar__navigation'>
        <header className='navbar__header'>
          <Link href='/'>
            <p className='navbar__logo'>
              Markus<span className='navbar__media'>Wiland</span>
            </p>
          </Link>
          <nav className='navbar__nav'>
            <ul className='navbar__ul'>
              <li className='navbar__li'>
                <Link href='/'>
                  <a>Start</a>
                </Link>
              </li>
              <li className='navbar__li'>
                <Link href='/blog'>
                  <a>Blogg</a>
                </Link>
              </li>
              <li className='navbar__li'>
                <Link href='/portfolio'>
                  <a>Portfolio</a>
                </Link>
              </li>
              <li className='navbar__li'>
                {' '}
                <Link href='/about'>
                  <a>Om Mig</a>
                </Link>
              </li>
              <li className='navbar__li'>
                <Link href='/contact'>
                  <a>Kontakta Mig</a>
                </Link>
              </li>
              <li className='navbar__li'>
                <Link href='/gallery'>
                  <a>Gallery</a>
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
      <style jsx scoped>
        {`
          .navbar {
            display: flex;
            flex-direction: column;
            height: 80px;
          }

          .navbar__navigation {
            display: flex;
            height: 100%;
            align-items: center;
          }

          .navbar__header {
            display: flex;
            align-items: center;
            width: 100%;
          }
          .navbar__header > h3 {
            margin: 0;
          }

          /* LINKS */

          .navbar__nav {
            flex: 1;
            display: flex;
            justify-content: flex-end;
          }

          .navbar__ul {
            display: flex;
          }
          .navbar__li {
            padding: 10px;
            cursor: pointer;
            display: inline-block;
            text-transform: uppercase;
          }
          .navbar__li > a {
            color: black;
            font-size: small;
            display: inline-block;
            position: relative;
            transition: all 0.2s ease-in;
          }

          .navbar__li a:after {
            height: 3px;
            position: absolute;
            content: '';
            -webkit-transition: all 0.35s ease;
            transition: all 0.35s ease;
            background-color: var(--brand);
            width: 0;
          }

          .navbar__li a:after {
            bottom: 0;
            left: 0;
          }
          .navbar__li a:hover:after,
          .navbar__li .active a:after {
            width: 100%;
          }

          /* LINK */
          .navbar__logo {
            font-weight: 200;
            font-size: 2rem;
            text-transform: uppercase;
            cursor: pointer;
          }
          .navbar__media {
            color: var(--brand);
          }
        `}
      </style>
    </div>
  )
}
