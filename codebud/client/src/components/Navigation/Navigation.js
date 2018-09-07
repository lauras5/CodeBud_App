import React, { Component } from 'react';
import { Navbar, NavItem } from 'react-materialize';
import { Link } from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <Navbar brand='CodeBud' right>
                <NavItem><Link to='/map'>Map</Link></NavItem>
                <NavItem><Link to='/'>Home</Link></NavItem>
            </Navbar>
        )
    }
};

export default Nav;

