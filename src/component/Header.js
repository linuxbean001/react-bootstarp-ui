import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

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
                                <Link to="/"> 
                                    <img src="http://app.amptorrent.com/wp-content/uploads/2018/06/Omnivoltaic-B2B-Logo.png" />
                                </Link>
                            </div>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>

                        <Nav pullRight>
                            <NavDropdown eventKey={3} title="Account" id="basic-nav-dropdown">
                                <MenuItem eventKey={3.1}>
                                    <Link to="/login" >Login</Link>
                                </MenuItem>
                            </NavDropdown>
                            <NavItem eventKey={1} >
                                <Link to="/test" >P Test Page</Link>
                            </NavItem>
                            <NavItem eventKey={2} >
                                <Link to="/assign" >Assigned Items</Link>
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <p className="fixed-menu-toggle" onClick={() => this.setState({ open: !this.state.open })} > <Glyphicon glyph="remove" /></p>


                <Fade in={this.state.open}>

                    <Well>
                        <Nav stacked activeKey={1}>
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
