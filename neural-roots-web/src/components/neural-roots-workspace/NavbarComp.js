import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Nav, Navbar, NavDropdown ,Container, Form, FormControl} from "react-bootstrap";

// const NavbarComp = () =>{
//   return (
//     <Navbar bg="light" expand="lg">
//   <Container fluid>
//     <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
//     <Navbar.Toggle aria-controls="navbarScroll" />
//     <Navbar.Collapse id="navbarScroll">
//       <Nav
//         className="me-auto my-2 my-lg-0"
//         style={{ maxHeight: '100px' }}
//         navbarScroll
//       >
//         <Nav.Link href="#action1">Home</Nav.Link>
//         <Nav.Link href="#action2">Link</Nav.Link>
//         <NavDropdown title="Link" id="navbarScrollingDropdown">
//           <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
//           <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
//           <NavDropdown.Divider />
//           <NavDropdown.Item href="#action5">
//             Something else here
//           </NavDropdown.Item>
//         </NavDropdown>
//         <Nav.Link href="#" disabled>
//           Link
//         </Nav.Link>
//       </Nav>
//       <Form className="d-flex">
//         <FormControl
//           type="search"
//           placeholder="Search"
//           className="me-2"
//           aria-label="Search"
//         />
//         <Button variant="outline-success">Search</Button>
//       </Form>
//     </Navbar.Collapse>
//   </Container>
// </Navbar>
//   )
// }


const NavbarComp = () =>{
  return (
    <header className="navbar navbar-light sticky-top bg-light flex-md-nowrap p-0 shadow">
      <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">Company name</a>
      <button className="navbar-toggler position-absolute d-md-none collapsed" t
              ype="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search"/>
      <div className="navbar-nav">
        <div className="nav-item text-nowrap">
          <a className="nav-link px-3" href="#">Sign out</a>
        </div>
      </div>
    </header>
  )
}

export default NavbarComp