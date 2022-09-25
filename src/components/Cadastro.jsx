import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './Custom.css'

export default function Cadastro() {
  return (
    <Stack className='col-md-5 mt-5 mx-auto'>
      <Form className="container col-12">

        <Stack direction='horizontal' gap={1}>
          <Form.Group className="mb-3 col-6" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Nome" />
          </Form.Group>

          <Form.Group className="mb-3 col-6" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Sobrenome" />
          </Form.Group>
        </Stack>

        <Form.Group className="mb-3 col-12" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3 col-12" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Defina uma senha." />
        </Form.Group>

        <Form.Group className="mb-3 col-12" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Confirme a senha." />
        </Form.Group>

        <div className="d-grid gap-2 mb-3 mt-3 col-12">
          <Button variant="primary" size="lg">
            Cadastre-se
          </Button>
        </div>
      </Form>

    </Stack>
  );
}