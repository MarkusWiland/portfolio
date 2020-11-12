import Header from '../components/Header'
import Footer from '../components/Footer'
import Container from '../components/Container'
import styles from '../styles/Layout.module.css'

export default function Layout({ children }) {
  return (
    <>
    <Container>
    <Header />
      <div className={styles.container}>
        <main>{children}</main>
      </div>
      <Footer />
      </Container>
    </>
  )
}