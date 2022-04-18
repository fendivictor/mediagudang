import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './navbar.module.css';

export default function Menu() {
  return (
    <Navbar expand="lg" sticky="top" className={styles.bgNavbar}>
      <Container fluid className="mx-5">
        <Navbar.Brand className="text-light" href="#">MEDIA GUDANG</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '150px' }}
            navbarScroll
          >
          </Nav>
          <Nav>
            <Nav.Link className="mx-2 text-light" href="#home">Home</Nav.Link>
            <Nav.Link className="mx-2 text-light" href="#about-us">Tentang Kami</Nav.Link>
            <Nav.Link className="mx-2 text-light" href="#products">Produk</Nav.Link>
            {/* <Nav.Link className="mx-2 text-light" href="#action1">Layanan</Nav.Link> */}
            <Nav.Link className="mx-2 text-light" href="#contact">Kontak</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}