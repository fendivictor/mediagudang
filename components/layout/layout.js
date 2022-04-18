import Menu from "../navbar/navbar";
import styles from '../../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Layout({children}) {
  return (
    <>
      <Menu />
      <main>{children}</main>
      <footer className={styles.footer}>
        <span className="text-center">Copyright © 2022 Media Gudang </span>
      </footer>
    </>
  )
}