import Layout from "../components/Layout"
import Head from 'next/head'
export default function portfolio() {
    return (
        <Layout>
              <Head>
        <title>Wiland Media - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <section className="section">
            <h1>Portfolio</h1>
            <hr className="hr" />
        </section>
        </Layout>
    )
}
