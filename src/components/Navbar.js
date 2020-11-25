import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg'
import './styles/Navbar.css';

class Navbar extends React.Component{
    render(){
        return(
            <div className="Navbar">
                <div className="Navbar__brand">
                    <Link clasName="Navbar_brand-logo" to="/">
                        <img className="Navbar__brand-logo" src={logo} alt="Logo"/>
                        <span className="font-weight-light">conferencias</span>
                        <span className="font-weight-bold">.com</span>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Navbar;