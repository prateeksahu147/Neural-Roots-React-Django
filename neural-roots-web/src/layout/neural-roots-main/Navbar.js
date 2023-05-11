import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LogoImg from '../../assets/img/clients/logo.png';

function NavbarMain() {
  return (
    <header id="header" className="fixed-top ">
    <div className="container d-flex align-items-center">
    <a href="#hero" className="logo me-auto">
      <img src= {LogoImg} alt="" className="img-fluid"></img>
    </a>
    <Navbar id="navbar" className="navbar">
        <ul>
          <li><a className="nav-link scrollto  " href="#hero">Home</a></li>
          <li><a className="nav-link scrollto" href="#about">About</a></li>
          <li><a className="nav-link scrollto" href="#services">Service</a></li>
          <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
          {/* <li><a className="nav-link scrollto" href="#contact">Case Study</a></li>
          <li><a className="nav-link scrollto" href=" ">Blog</a></li>
          <li><a className="nav-link scrollto" href=" ">Career</a></li> */}
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </Navbar>
      </div>
      </header>
  );
}

export default NavbarMain;