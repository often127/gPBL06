import React from 'react'
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function addressOverflow(address) {
    return `${address.substr(0, 3)}...${address.substr(39, 42)}`
}

function NavigationBar(props) {
    return (
        <Navbar collapseOnSelect expand="lg" bg="white" fixed="top" className='shadow-sm'>
            <Container>
                <Navbar.Brand href="/" className='fw-bold fs-4'>
                    <img
                        src="/logo_F_primary.png"
                        alt="findex_logo"
                        width="35"
                        height="35"
                        className="d-inline-block align-top"
                    />{' '}
                    FINDEX
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="col"></Nav>
                    <Nav className="col-12 col-lg-6 me-4">
                        <div className="input-group">
                            <label className="input-group-text bg-white" htmlFor='search'><FontAwesomeIcon icon={faSearch} /></label>
                            <input type="search" className="form-control" name='search' id='search' placeholder="Find index, item name, and address" />
                        </div>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/create" className='fw-bold me-4'>Create</Nav.Link>
                        <Nav.Link href="/checkRawData" className='fw-bold me-4'>Check</Nav.Link>
                        <NavDropdown className='fw-bold' title={addressOverflow(props.account._id)} id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Setting</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Sign out</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}


export default NavigationBar;