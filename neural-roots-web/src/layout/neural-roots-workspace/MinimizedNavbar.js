import React from "react"
import "../../styles/WorkspaceStyle.css"
import { Nav,Navbar, Container } from "react-bootstrap"
import companyLogo from "../../static/workspace-static/NeuralRootsLogo.png";

const MinimizedNavbar = ({props}) =>{    
  
    return(
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
            )
}


export default MinimizedNavbar

