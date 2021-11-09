import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function Header() {
    return (
        <header>
            <Navbar bg="light" variant="light">
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand>Home</Navbar.Brand>
                    </LinkContainer>
                    <Nav className="mr-auto">
                        <LinkContainer to='/'>
                            <Nav.Link>Rose Eternelle</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to='/'>
                            <Nav.Link>Nounours En Rose</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to='/'>
                            <Nav.Link>Boite De Roses</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to='/'>
                            <Nav.Link>Bijoux</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to='/'>
                            <Nav.Link>Nos Roses</Nav.Link>
                        </LinkContainer>
                    </Nav>
                        
                    <Nav className="ml-auto">
                        <LinkContainer to='/cart'>
                            <Nav.Link><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to='/login'>
                            <Nav.Link className="justify-content-end"><i className="fas fa-user"></i>Login</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
