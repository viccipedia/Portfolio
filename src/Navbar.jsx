import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';


const NavBar = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
        <Navbar expand='lg' className='navbar-custom'> 
        <Container>
          <Navbar.Brand className='brand' as={Link} to="/">Victor.</Navbar.Brand>
          <Navbar.Toggle className="bg-light" aria-controls='offcanvas' onClick={handleShow} />
          <Nav className="nav-links">
            <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
            <Nav.Link as={Link} to="">Download Resume</Nav.Link>
            <Nav.Link as={Link} to="">Contacts</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose} className='w-75'>
        <Offcanvas.Header closeButton>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Nav className="nav-off">
            <Nav.Link as={Link} to="#home">Projects</Nav.Link>
            <Nav.Link as={Link} to="">Download Resume</Nav.Link>
            <Nav.Link as={Link} to="">Contacts</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default NavBar