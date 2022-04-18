import styles from './home-slide.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Container } from 'react-bootstrap';

export default function HomeSlide() {
  return (
    <>
      <div id="home" className={styles.bgHeader}>
        <Container className={styles.paddingContent}>
          <Row className={styles.alignMiddle}>
            <div className="col-lg-6 col-md-6 p-5">
              <p className={styles.title}>
                Kami adalah perusahaan Software Developer Profesional dengan 
                didukung oleh Team Kreatif Handal, yang sudah banyak 
                dipercaya oleh berbagai macam jenis usaha.
              </p>
            </div>
            <div className="col-lg-6 col-md-6">
              <img src="/bg-home.png" className={styles.imgHeader} />
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
}