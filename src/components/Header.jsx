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
import { showSignInModal, userLogOut } from '../actions'
import { connect } from 'react-redux';
import { firebaseApp } from '../firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Header.css';

const Logo = props => {
    return(
        <NavbarBrand href={props.url} className={props.class}>
            <FontAwesomeIcon icon={props.icon} color={props.iconColour} size={props.iconSize} />
            <h1>
                {props.name}
            </h1>
        </NavbarBrand>
    );
}

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            error: {
				message: ''
			}
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
        this.props.logOut();
    }

    render() {
        const UserActions = () => {
            if(!this.props.user.isAuthenticated){
                return(
                    <NavLink>
                        <Button 
                            onClick={() => this.props.signInModal()}>
                            <span>Login</span>
                        </Button>
                    </NavLink>
                );
            }else{
                return(
                    <NavLink>
                        <Button 
                            onClick={() => this.signOut()}>
                            <span>Sign Out</span>
                        </Button>
                    </NavLink>
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
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
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
                            <NavItem>
                                <UserActions />
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        );
    }
}

function mapStateToProps(state){
    const { user } = state;
    return {
        user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signInModal: () => dispatch(showSignInModal()),
        logOut: () => dispatch(userLogOut())
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Header);
