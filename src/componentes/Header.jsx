import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './header.css'

function Header() {
  return (
    <nav>
        <Navbar bg="light" expand="lg">
        <Container fluid className='nav'>
            <Link to="/" className='me-auto my-2 my-lg-0 nav-link'>Livraria</Link> 
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '200px' }} navbarScroll>
                <Link to="/" className='nav-link'>Home</Link>
                <Link to="cadastrar" className='nav-link'>Cadastre-se</Link>
                <Link to="minhaestante" className='nav-link'> Minha Estante </Link>
                <Link to="comprar" className='nav-link'> Comprar </Link>
            </Nav>
            <Form className="d-flex">
                <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
            </Form>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </nav>
  );
}

export default Header;
