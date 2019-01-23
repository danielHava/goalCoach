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
    Button
} from 'reactstrap';

import { showSignInMOdal } from '../actions'
import { connect } from 'react-redux';

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
    // this.toggleModal = this.toggleModal.bind(this);
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
//   toggleModal() {
//     // toggle modal
//     this.props.showSignInMOdal();
//   }
  signOut(){
    firebaseApp.auth().signOut();
    history.push('/');
  }
  render() {
    return (
        <Navbar color="dark" dark expand="sm">
            <Container>
                <NavbarBrand href="/">
                    <FontAwesomeIcon icon="satellite" color="#d81b60" size="2x" className="logo"/>
                    <h1>
                        Begamas
                    </h1>
                </NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar pills>
                        <NavItem>
                            <NavLink href="/">
                                <span>Home</span>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/tasks">
                                <span>Tasks</span>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/spend">
                                <span>Marketplace</span>
                                {/* <FontAwesomeIcon icon="rocket" color="#d81b60" size="x" className="ml-1 spend_points"/> */}
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/earn">
                                <span>Buy</span>
                                <FontAwesomeIcon icon="rocket" color="#007bff" size="x" className="ml-1 earn_points"/>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <Button 
                                    onClick={() => this.props.showSignInMOdal()}>
                                    <span>Login / Register</span>
                                </Button>
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    );
  }
}
  
export default connect(null, { showSignInMOdal })(Header);
