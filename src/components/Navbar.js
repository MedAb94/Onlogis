import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { Button } from './Button';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container my-container">
                <Link to="/" className="navbar-brand" onClick={closeMobileMenu}>
                    <img src="img/logo.png" alt="Onlogis Logo" srcset="" className="img-fluid" />
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <div className="collapse navbar-collapse">
                    <ul className={click ? "navbar-nav ms-auto active" : "navbar-nav ms-auto"}>
                        {/* <ul className="navbar-nav ms-auto"> */}
                        <li className="navbar-item">
                            <Link to="/" className="nav-link" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/Discover" className="nav-link" onClick={closeMobileMenu}>
                                Discover Onlogis
                            </Link>
                        </li>
                        <li>
                            <Link to="/Pricing" className="nav-link" onClick={closeMobileMenu}>
                                Pricing Plans
                            </Link>
                        </li>
                        <li>
                            <Link to="/Support" className="nav-link" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={closeMobileMenu}>
                                Onlogis Support
                            </Link>
                        </li>
                        {/* <li className="nav-item dropdown">
                            <Link to="/Support" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={closeMobileMenu}>
                                Onlogis Support
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="/">Action</a></li>
                                <li><a className="dropdown-item" href="/">Another action</a></li>
                                <li><a className="dropdown-item" href="/">Something else here</a></li>
                            </ul>
                        </li> */}
                        <li className="navbar-item">
                            <Link to="/we-are-close-to-you" className="nav-link" onClick={closeMobileMenu}>
                                We are close to you
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle="btn-primary">LOGIN</Button>}
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
