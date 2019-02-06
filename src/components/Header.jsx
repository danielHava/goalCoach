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
    Button,
    DropdownMenu,
    DropdownItem,
    Dropdown,
    DropdownToggle
} from 'reactstrap';
import { showSignInModal, userLogOut } from '../actions'
import { connect } from 'react-redux';
import { firebaseApp } from '../firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Header.css';

const Logo = props => {
    return(
        <NavbarBrand href={props.url} className={props.class}>
            <FontAwesomeIcon icon={props.icon} color={props.iconColour} size={props.iconSize} />
            <h1>{props.name}</h1>
        </NavbarBrand>
    );
}

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavbarOpen: false,
            isUserDropdownOpen: false,
            error: {
				message: ''
			}
        };
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.toggleUserDropdown = this.toggleUserDropdown.bind(this);
        this.signOut = this.signOut.bind(this);
    }

    toggleNavbar() {
        this.setState({
            isNavbarOpen: !this.state.isNavbarOpen
        });
    }

    toggleUserDropdown() {
        this.setState({
            isUserDropdownOpen: !this.state.isUserDropdownOpen
        });
    }

    signOut(){
        firebaseApp.auth().signOut();
        this.props.logOut();
    }

    render() {
        const UserActions = () => {
            if(!this.props.user.isAuthenticated){
                return(
                    <NavItem>
                        <NavLink>
                            <Button 
                                onClick={() => this.props.signInModal()}>
                                <span>Login</span>
                            </Button>
                        </NavLink>
                    </NavItem>
                );
            }else{
                return(
                    <NavItem style={{display: 'inline-flex'}}>
                        <NavLink>
                            <Dropdown isOpen={this.state.isUserDropdownOpen} toggle={this.toggleUserDropdown}>
                                <DropdownToggle caret>
                                    {this.props.user.displayName}
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem header>User Profile</DropdownItem>
                                    <DropdownItem>Edit</DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>Foo Action</DropdownItem>
                                    <DropdownItem>Bar Action</DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem
                                        onClick={() => this.signOut()}>
                                        <span>Sign Out</span>
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </NavLink>
                    </NavItem>
                );
            }
        }

        return (
            <Navbar color="dark" dark expand="sm">
                <Container>
                    <Logo 
                        name="Begamias"
                        icon="satellite"
                        class="logo"
                        url="/"
                        iconColour="#d81b60"
                        iconSize="2x" />
                    <NavbarToggler onClick={this.toggleNavbar} />
                    <Collapse isOpen={this.state.isNavbarOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/">
                                    <span>Home</span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/dashboard">
                                    <span>Dashboard</span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/tasks">
                                    <span>Tasks</span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/market">
                                    <span>Marketplace</span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/buy">
                                    <span>Buy</span>
                                    <FontAwesomeIcon icon="rocket" color="#007bff" size="1x" className="ml-1 earn_points"/>
                                </NavLink>
                            </NavItem>
                            <UserActions />
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        );
    }
}

function mapStateToProps(state){
    const { user } = state;
    return { user };
}

const mapDispatchToProps = dispatch => {
    return {
        signInModal: () => dispatch(showSignInModal()),
        logOut: () => dispatch(userLogOut())
    };
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Header);
