
import { NavLink, Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {
  const imgLogo = '../img/book.png';

  return (


    <Navbar expand="lg" variant="light" className="navbarContainer customNavbar dark">
      <div className='container'>
      <Navbar.Brand as={Link} to="/">
        <img className="logo" src={imgLogo} alt="" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav" className="justify-content-between">
        <Nav>
        <Nav.Link as={NavLink} to="/AboutUs" activeClassName="activeLink">
            Nosotros
          </Nav.Link>
          <Nav.Link as={NavLink} to="/categoria/1" activeClassName="activeLink">
            Libros
          </Nav.Link>
          <Nav.Link as={NavLink} to="/categoria/2" activeClassName="activeLink">
            Comics
          </Nav.Link>
          <Nav.Link as={NavLink} to="/categoria/3" activeClassName="activeLink">
            Peliculas
          </Nav.Link>
          <Nav.Link as={NavLink} to="/categoria/4" activeClassName="activeLink">
            Musica
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <CartWidget />
      </div>
    </Navbar>
  );
};

export default NavBar;
