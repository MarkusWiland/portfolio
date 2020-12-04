import Layout from '../components/Layout'
import { FaDatabase, FaPencilAlt } from 'react-icons/fa'
import { SiJavascript, SiTailwindcss, SiReact } from 'react-icons/si'
import { MdLanguage, MdCloudQueue } from 'react-icons/md'
import Head from 'next/head'
export default function about() {
  return (
    <Layout>
      <Head>
        <title>Om Mig | Markus Wiland</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h3 className='text-center'>Programmer, designer, creator</h3>
      <section className='section'>
        <h1>Om Mig</h1>
        <hr className='hr' />
        <main className='section'>
          <div className='container'>
            <div className='info'>
              <h3>Info</h3>
              <p>Studerat Front End Developer på IT-Högskolan i Mölndal</p>
              <span>2019-2021</span>
            </div>
            <div className='imageContent'>
              <img src='/images/headshot.jpg' className='image' />
            </div>
          </div>
          <div className='fardigheter-h3'>
            <h3>Mina färdigheter</h3>
          </div>
          <div className='fardigheter'>
            <div className='grid'>
              <div className='flex items'>
                <div className='icon-bg'>
                  <MdLanguage size={35} />
                </div>
                <div className='padding'>
                  <h4>Språk</h4>
                  <p className='p'>HTML, CSS, Javascript</p>
                </div>
              </div>
              <div className='flex items'>
                <div className='icon-bg'>
                  <SiJavascript color='#F0DB4F' size={35} />
                </div>
                <div className='padding'>
                  <h4>Ramverk</h4>
                  <p className='p'>React (Next.js), Vue(Nuxt.js)</p>
                </div>
              </div>
              <div className='flex items'>
                <div className='icon-bg'>
                  <SiTailwindcss size={35} />
                </div>
                <div className='padding'>
                  <h4>Backend</h4>
                  <p className='p'>NodeJS</p>
                </div>
              </div>
              <div className='flex items'>
                <div className='icon-bg'>
                  <FaDatabase size={35} />
                </div>
                <div className='padding'>
                  <h4>Databaser</h4>
                  <p className='p'>SQL, MongoDB, Firebase</p>
                </div>
              </div>
              <div className='flex items'>
                <div className='icon-bg'>
                  <MdCloudQueue size={35} />
                </div>
                <div className='padding'>
                  <h4>Cloudservices</h4>
                  <p className='p'>Firebase(Firestore)</p>
                </div>
              </div>
              <div className='flex items'>
                <div className='icon-bg'>
                  <FaPencilAlt size={35} />
                </div>
                <div className='padding'>
                  <h4>Design</h4>
                  <p className='p'>Figma, TailwindCSS, Material-UI</p>
                </div>
              </div>
              <div className='flex items'>
                <div className='icon-bg'>
                  <FaPencilAlt size={35} />
                </div>
                <div className='padding'>
                  <h4>CMS</h4>
                  <p className='p'>Wordpress, Sanity.io</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
      <style jsx scoped>
        {`
          .container {
            display: flex;
          }
          .grid {
            display: grid;
            justify-content: center;
            grid-gap: 5rem;
            grid-template-columns: repeat(3, 1fr);
          }
          .fardigheter-h3 {
            margin: 4rem 0;
          }
          .fardigheter {
            margin: 4rem 0;
          }
          .icon-bg {
            width: 70px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            height: 70px;
            background-color: #eee;
          }
          .info {
            flex: 0.8;
          }
          .imageContent {
            flex: 0.2;
            align-items: center;
            justify-content: center;
            display: flex;
          }
          .items {
            align-items: center;
          }
          .image {
            width: 170px;
            height: 100%;
          }
          .padding {
            padding-left: 1rem;
          }
          .padding > h4 {
            font-size: 1.4rem;
          }
          @media screen and (max-width: 375px) {
            .container {
              flex-direction: column;
            }
            .info {
              order: 2;
            }
            .imageContent {
              order: 1;
            }
            .grid {
              display: grid;
              justify-content: center;
              grid-gap: 5rem;
              grid-template-columns: repeat(2, 1fr);
            }
            .icon-bg {
              width: 30px;
              display: flex;
              justify-content: center;
              align-items: center;
              border-radius: 50%;
              height: 30px;
              background-color: #eee;
            }
          }
        `}
      </style>
    </Layout>
  )
}
