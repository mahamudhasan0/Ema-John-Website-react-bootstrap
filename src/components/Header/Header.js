import React from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

const Header = () => {
   return (
      <>
         <Link className="w-25 d-block mx-auto py-3" to="/">
            <Image src={logo} />
         </Link>
         <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
               <Link className="navbar-brand" to="/">
                  Ema-Jhon
               </Link>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ml-auto">
                     <Link className="nav-link" to="/shop">
                        Shop
                     </Link>
                     <Link className="nav-link" to="/review">
                        Order Review
                     </Link>
                     <Link className="nav-link" to="/inventory">
                        Manage Inventory
                     </Link>
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>
      </>
   );
};

export default Header;
