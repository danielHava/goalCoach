import React, { Component } from 'react';
import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Container,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import { firebaseApp } from '../firebase';
import history from '../history'
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isOpen: false
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  signOut(){
    firebaseApp.auth().signOut();
    history.push('/');
  }
  render() {
    return (
        <Navbar color="dark" dark expand="sm">
            <Container>
                <NavbarBrand href="/">
                    <FontAwesomeIcon icon="calendar-check" color="#d81b60" size="2x" className="logo"/>
                    <h1>
                        TaskMaster
                    </h1>
                </NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar pills>
                        <NavItem>
                            <NavLink href="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/tasks">Tasks</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/signin">Sign In</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink 
                                onClick={() => this.signOut()}>
                                Sign out
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    );
  }
}
  
export default Header;
