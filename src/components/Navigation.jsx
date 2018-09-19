import React, { Component } from 'react';
import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Container,
    Row,
    Col,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

class Navigation extends Component {
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
  render() {
    return (
        <Container fluid>
            <Row>
                <Col className="p-0">
                    <Navbar color="dark" dark expand="sm">
                        <NavbarBrand href="/">Goal Coach</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="/">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/signin/">Sign In</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/signup">Sign Up</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </Col>
            </Row>
        </Container>
    );
  }
}
  
export default Navigation;