import React, { Component } from 'react';
// import { Responsive, Menu, Container, Visibility, Segment, Icon, Dropdown, Image, Button, Divider, Sidebar, Transition } from 'semantic-ui-react';
import { Navbar, NavItem, Nav, NavLink, NavDropdown, MenuItem, Button, Fade, Well, Glyphicon, ButtonToolbar, ButtonGroup, } from 'react-bootstrap';

class Header extends Component {
   
    state = {
        open: false
    }


    render() {


        return (
            <div>
               
               


                <Navbar collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <div className="header-logo">
                                <img src="http://app.amptorrent.com/wp-content/uploads/2018/06/Omnivoltaic-B2B-Logo.png" />
                            </div>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>

                        <Nav pullRight>
                            <NavDropdown eventKey={3} title="Account" id="basic-nav-dropdown">
                                <MenuItem eventKey={3.1}>Login</MenuItem>
                            </NavDropdown>
                            <NavItem eventKey={1} >
                                P Test Page
    </NavItem>
                            <NavItem eventKey={2} >
                                Assigned Items
    </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <p className="fixed-menu-toggle" onClick={() => this.setState({ open: !this.state.open })} > <Glyphicon glyph="remove" /></p>

              
                <Fade in={this.state.open}>
                 
                    <Well>
                            <Nav  stacked activeKey={1}>
                                <NavItem eventKey={1} >
                                    NavItem 1 content
    </NavItem>
                                <NavItem eventKey={2} title="Item">
                                    NavItem 2 content
    </NavItem>
                                <NavItem eventKey={3}>
                                    NavItem 3 content
    </NavItem>
                            </Nav>
            </Well>
                   
                </Fade>
                            
                                
            </div>
        );
    }
}

export default Header;
