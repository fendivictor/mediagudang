import styles from './contact.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Button, Modal, Form, Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots, faCalendarAlt } from '@fortawesome/free-regular-svg-icons'
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';


export default function Contact() {
  const [show, setShow] = useState(false);
  const [showNotif, setShowNotif] = useState(false);
  const [notifType, setNotifType] = useState("success");
  const [notifTitle, setNotifTitle] = useState("Terima Kasih");
  const [notifDesc, setNotifDesc] = useState("Terima kasih sudah mempercayai kami sebagai calon partner anda. Kami akan menghubungi anda segera.");
  const [data, setData] = useState({
    nama: '',
    email: '',
    telepon: '',
    deskripsi: ''
  });

  const handleChange = (e) => {
    setData(prevState => ({
      ...prevState, [e.target.name] : e.target.value
    }))
  }

  const storeData = async (e) => {
    await fetch('https://demomediagudang.masuk.web.id/notifikasi/index.php/api/Contact/index', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json'
      }
    })
    .then((response) => response.json())
    .then((json) => {
      if (json.code == 200) {
        handleNotifType("success");
        handleNotifTitle("Terima Kasih");
        handleNotifDesc("Terima kasih sudah mempercayai kami sebagai calon partner anda. Kami akan menghubungi anda segera.");
        handleClose();
        setData({
          nama: '',
          email: '',
          telepon: '',
          deskripsi: ''
        });
        openNotif();
      } else {
        handleNotifType("danger");
        handleNotifTitle("Error");
        handleNotifDesc(json.message);
        openNotif();
      }
    })
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const closeNotif = () => setShowNotif(false);
  const openNotif = () => setShowNotif(true);

  const handleNotifType = (type) => setNotifType(type);
  const handleNotifTitle = (title) => setNotifTitle(title);
  const handleNotifDesc = (desc) => setNotifDesc(desc);

  return (
    <>
      <Container id="contact" className="padding-section-bottom">
        <Row>
          <div className="col-12">
            <h2 className={styles.title}> 
              Diskusikan kebutuhan
              bisnis Anda dengan kami
            </h2>
          </div>
          <div className="col-lg-4 col-md-6 text-center mt-5">
            <FontAwesomeIcon icon={faCommentDots} width={36} />
            <p>Live Chat</p>
            <small>Bicara langsung dengan konsultan kami <br /> melalui web chat, atau telepon</small> <br /> <br />
            <a href="https://wa.me/6289655000074" className="btn btn-sm btn-primary my-1">Chat via Whatsapp (Wury)</a>
            <br />
            <a href="https://wa.me/628156647203" className="btn btn-sm btn-primary my-1">Chat via Whatsapp (Victor)</a>
          </div>
          <div className="col-lg-4 col-md-6 text-center mt-5">
            <FontAwesomeIcon icon={faPhoneVolume} width={36} />
            <p>Call Center</p>
            <small>Konsultasikan masalah bisnis Anda. <br /> Office hours: 09:00 – 17:00 WIB</small> <br /> <br />
            <a href="tel:6289655000074" className="btn btn-sm btn-primary my-1">089 655 0000 74 (Wury)</a>
            <br />
            <a href="tel:628156647203" className="btn btn-sm btn-primary my-1">081 566 472 03 (Victor)</a>
          </div>
          <div className="col-lg-4 col-md-6 text-center mt-5">
            <FontAwesomeIcon icon={faCalendarAlt} width={36} />
            <p>Jadwalkan Meeting</p>
            <small>Pilih waktu yang paling nyaman <br /> untuk live demo personal dengan tim kami</small> <br /> <br />
            <Button onClick={handleShow} className="btn btn-sm btn-primary">Jadwalkan Meeting</Button>
          </div>  
        </Row>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Jadwalkan Meeting</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form autoComplete="off">
          <Form.Group className="mb-3" controlId="exampleForm.nama">
            <Form.Label>Nama</Form.Label>
            <Form.Control placeholder="John Doe" onChange={handleChange} name="nama" value={data.nama} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" onChange={handleChange} name="email" value={data.email} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.handphone">
            <Form.Label>Telepon</Form.Label>
            <Form.Control placeholder="08882100" onChange={handleChange} name="telepon" value={data.telepon} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Deskripsikan Kebutuhan Anda</Form.Label>
            <Form.Control as="textarea" rows={3} onChange={handleChange} name="deskripsi" value={data.deskripsi} />
          </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Batalkan
          </Button>
          <Button variant="primary" onClick={storeData}>
            Buat Jadwal
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showNotif} onHide={closeNotif}>
        <Modal.Body>
        <Alert variant={notifType}>
          <Alert.Heading>{notifTitle}</Alert.Heading>
          <p>
            {notifDesc}
          </p>
        </Alert>
        </Modal.Body>
      </Modal>
    </>
  );
}