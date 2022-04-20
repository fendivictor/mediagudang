import styles from './product.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Card } from 'react-bootstrap';

export default function Product() {
  return(
    <>
      <Container className="padding-section-bottom" id="products">
        <Row>
          <div className="col-12 text-center mb-3">
            <h2 className={styles.title}>Produk Kami</h2>
          </div>
          <div className="col-lg-4 text-left mt-3">
            <Card className={styles.background}>
              <Card.Body>
                <Card.Title className={styles.productTitle}>ERP</Card.Title>
                <Card.Text className={styles.productDescription}>
                Manajemen Pengelolaan perusahaan dari mulai barang sampai ke perhitungan keuntungan perusahaan.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4 text-left mt-3">
            <Card className={styles.background}>
              <Card.Body>
                <Card.Title className={styles.productTitle}>HUMAN RESOURCE SYSTEM</Card.Title>
                <Card.Text className={styles.productDescription}>
                Mengelola data karyawan, kehadiran, ijin, cuti hingga sampai ke penggajian karyawan dalam 1 aplikasi.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4 text-left mt-3">
            <Card className={styles.background}>
              <Card.Body>
                <Card.Title className={styles.productTitle}>KLINIK KESEHATAN</Card.Title>
                <Card.Text className={styles.productDescription}>
                Sistem pengelolaan klinik, dari pendaftaran pasien, manajemen inventory obat dan laporan pendapatan.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4 text-left mt-3">
            <Card className={styles.background}>
              <Card.Body>
                <Card.Title className={styles.productTitle}>POINT OF SALES</Card.Title>
                <Card.Text className={styles.productDescription}>
                Sistem penjualan barang untuk toko-toko dan umkm dengan fitur manajemen stok, penjualan, penerimaan barang dan laporan pendapatan.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4 text-left mt-3">
            <Card className={styles.background}>
              <Card.Body>
                <Card.Title className={styles.productTitle}>ACCOUNTING & FINANCE</Card.Title>
                <Card.Text className={styles.productDescription}>
                Sistem keuangan yang simple dan mudah digunakan untuk pencatatan keuangan lebih baik di perusahaan anda.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4 text-left mt-3">
            <Card className={styles.background}>
              <Card.Body>
                <Card.Title className={styles.productTitle}>WEBSITE PERUSAHAAN</Card.Title>
                <Card.Text className={styles.productDescription}>
                Website Company Profile dengan desain elegan dan kustomisasi yang bisa disesuaikan.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4 text-left mt-3">
            <Card className={styles.background}>
              <Card.Body>
                <Card.Title className={styles.productTitle}>APLIKASI MOBILE</Card.Title>
                <Card.Text className={styles.productDescription}>
                Pembuatan Aplikasi berbasis android dan iOS yang bisa disesuaikan dengan permintaan.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
}