import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';
import styles from './about.module.css';

export default function About() {
  return (
    <Container id="about-us" className="padding-section">
      <Row>
        <div className="col-lg-6">
          <img src='/about-us.png' className={styles.imageLeft} />
        </div>
        <div className="col-lg-6 p-4">
          <h2 className={styles.title}>Tentang Kami</h2>
          <p className={styles.description}>
            Sebagai penyedia solusi penyedia jasa software developer, kami menyadari betapa pentingnya produktivitas dan efisiensi. Solusi otomatis yang mendukung kegiatan operasional bisnis dapat memaksimalkan potensi perusahaan dan bersaing di pasar global. Oleh karena itu, kami mengambil kesempatan ini untuk membangun sebuah sistem berbasis cloud yang mengotomatiskan proses end-to-end operasi bisnis.
          </p>
        </div>
      </Row>
    </Container>
  );
}