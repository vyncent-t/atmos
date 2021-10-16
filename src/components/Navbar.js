import React from 'react';
import { Link } from 'react-router-dom';

function AtmosNavbar() {

    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <p className="navbar-brand">Navbar</p>
                <ul>
                    <li>
                        <Link to="/menu">Menu</Link>
                    </li>
                    <li>
                        <Link to="Dashboard">Your Room</Link>
                    </li>
                </ul>
            </div>
        </nav>)
}

export default AtmosNavbar