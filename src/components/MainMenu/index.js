import React, { Component } from 'react';
import { Nav, NavItem, Navbar, NavDropdown, MenuItem, Glyphicon } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import './style.css';

class MainMenu extends Component {
  // static propTypes = {}
  render() {
    
    return (
      <div id="sidebar-menu" className="sideBarMenuContainer">
            <Navbar fluid className="sidebar" inverse >

                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">User Name</a>
                    </Navbar.Brand>

                </Navbar.Header>

                <Navbar.Collapse>
                    <Navbar.Text className="userMenu">
                        <Navbar.Link to="/"><Glyphicon glyph="home"/></Navbar.Link>
                        <Navbar.Link href="#"><Glyphicon glyph="log-out"/></Navbar.Link>
                    </Navbar.Text>
                    <Nav>
                        {/* <NavDropdown id="" eventKey={1} title="Item 1">
                            <MenuItem eventKey={1.1} href="#">Item 1.1</MenuItem>
                        </NavDropdown> */}
                        <NavItem href="/about" eventKey={1}>O nas</NavItem>
                        <NavItem href="/forms" eventKey={4}>Formularze kontaktowe</NavItem>
                        <NavItem eventKey={3}>Item 3</NavItem>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>

            <NavLink to="/about">about</NavLink> |
            <NavLink to="/forms">Formularz </NavLink> |
            <NavLink to="/forms/new">Nowy Formularz</NavLink> |
        </div>
    );
  }
}

export default MainMenu;