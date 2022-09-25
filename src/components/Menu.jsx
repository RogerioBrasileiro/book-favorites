import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';

export default function Menu() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>

          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          
          <Nav className="me-auto">
            <Link to='/' className='nav-link'>Home</Link>
            <Nav><Link to='/login' className='nav-link'>Login</Link></Nav>
            <Nav><Link to='/cadastro' className='nav-link'>Cadastro</Link></Nav>
          </Nav>

        </Container>
      </Navbar>
    </>
  );
}