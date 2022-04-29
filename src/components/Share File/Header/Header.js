import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';



const Header = () => {
    const [user] = useAuthState(auth);
    const Navigate = useNavigate()


    const handleSignOut = () => {
        signOut(auth);
        Navigate('/login')
    }


    return (
        <div >
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <h2 className='font-sans font-bold text-xl text-cyan-100'>Covid Vaccine WearHouse</h2>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="inventory">Inventory</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="blogs">Blogs</Nav.Link>
                            {
                                user ?
                                    <button onClick={() => handleSignOut()} className='btn btn-link text-white text-decoration-none'>Logout</button>
                                    :
                                    <Nav.Link as={Link} to="login">Login</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;