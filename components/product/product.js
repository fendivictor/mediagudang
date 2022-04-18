import styles from './product.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Button } from 'react-bootstrap';

export default function Product() {
  return(
    <>
      <Container className="padding-section-bottom" id="products">
        <Row>
          <div className="col-12 text-center my-5">
            <h2>Produk Kami</h2>
          </div>
          <div className="col-6 text-left">
            <p className={styles.productTitle}>ERP</p>
            <p className={styles.productDescription}>
              Manajemen Pengelolaan perusahaan dari mulai barang sampai ke perhitungan keuntungan perusahaan.
            </p>
          </div>
          <div className="col-6 text-left">
            <p className={styles.productTitle}>HUMAN RESOURCE SYSTEM </p>
            <p className={styles.productDescription}>
              Mengelola data karyawan, kehadiran, ijin, cuti hingga sampai ke penggajian karyawan dalam 1 aplikasi.
            </p>
          </div>
          <div className="col-6 text-left">
            <p className={styles.productTitle}>KLINIK KESEHATAN</p>
            <p className={styles.productDescription}>
              Sistem pengelolaan klinik, dari pendaftaran pasien, manajemen inventory obat dan laporan pendapatan.
            </p>
          </div>
          <div className="col-6 text-left">
            <p className={styles.productTitle}>POINT OF SALES</p>
            <p className={styles.productDescription}>
              Sistem penjualan barang untuk toko-toko dan umkm dengan fitur manajemen stok, penjualan, penerimaan barang dan laporan pendapatan.
            </p>
          </div>
          <div className="col-6 text-left">
            <p className={styles.productTitle}>ACCOUNTING & FINANCE</p>
            <p className={styles.productDescription}>
              Sistem keuangan yang simple dan mudah digunakan untuk pencatatan keuangan lebih baik di perusahaan anda.
            </p>
          </div>
          <div className="col-6 text-left">
            <p className={styles.productTitle}>WEBSITE PERUSAHAAN</p>
            <p className={styles.productDescription}>
              Website Company Profile dengan desain elegan dan kustomisasi yang bisa disesuaikan.
            </p>
          </div>
          <div className="col-6 text-left">
            <p className={styles.productTitle}>APLIKASI MOBILE</p>
            <p className={styles.productDescription}>
              Pembuatan Aplikasi berbasis android dan iOS yang bisa disesuaikan dengan permintaan.
            </p>
          </div>
        </Row>
      </Container>
    </>
  );
}