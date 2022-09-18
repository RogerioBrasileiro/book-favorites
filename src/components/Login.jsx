import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Figure from 'react-bootstrap/Figure'
// import '../images/book.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';

export default function Login() {
  return (
    <Form className="container col-4 center-screen">

      <Figure>
        <Figure.Image
          width={171}
          height={180}
          alt="171x180"
          src="../images/book.jpg"
        />
      </Figure>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="center-me" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Permanecer conectado" />
      </Form.Group>

      <div className="d-grid gap-2 mb-3 mt-3">
        <Button variant="primary" size="lg">
          Log in
        </Button>
      </div>
    </Form>
  );
}