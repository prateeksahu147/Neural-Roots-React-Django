import React from "react"
import { Link } from "react-router-dom"
import "../../styles/WorkspaceStyle.css"
import { Nav,Navbar,NavDropdown,Dropdown, Container } from "react-bootstrap"
import {MdList} from "react-icons/md"
import companyLogo from "../../static/workspace-static/NeuralRootsLogo.png";
const SidebarComp = ({props}) =>{

  return(
    <div>
    <Nav>
      <div className="sidebar">
      <label><img src={companyLogo} className="img-fluid"/></label>
      {props.map((link) => {
          return (
                  <Link id="menu" key={link.RouteID} to = {link.Routes} >
                  {link.RouteDisplayedName}
                  </Link>
          );
      })}
      </div>
     
    </Nav>
    <div id="top-navbar"> 
    <Navbar  bg="light" expand="lg" sticky="top" fixed="top">
    <Container>
    <label><img id="mini-logo" src={companyLogo} className="img-fluid"/></label>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          {props.map((link) => {
            return (
                    <Nav.Link id="menu" key={link.RouteID} to = {link.Routes} >
                    {link.RouteDisplayedName}
                    </Nav.Link>
            );
          })}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </div>
  </div>
  )
}


export default SidebarComp

