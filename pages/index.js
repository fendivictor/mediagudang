import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout/layout'
import HomeSlide from '../components/slide/home-slide'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import About from '../components/about/about'
import Product from '../components/product/product'
import Contact from '../components/contact/contact'

export default function Home() {
  return (
    <Layout>
      <Container fluid className="p-0">
        <Head>
          <title>Media Gudang</title>
          <meta name="description" content="IT Consultant Pantura Kudus, Semarang, Jepara, Pati Web Developer" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <HomeSlide />
        <About />
        <Product />
        <Contact />
      </Container>
    </Layout>
  )
}
