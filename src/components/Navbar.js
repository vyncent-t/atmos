import React from 'react';
import { Link } from 'react-router-dom';
import menu from '../images/menubtn.png';
import room from '../images/yourRoom.png';
import title from '../images/altTitle.png';

function AtmosNavbar() {

    return (
        <nav className="bg-dark">
            <div className="container-fluid">
            <img alt="menu" src={title}></img>
                <div className="navbarbtn d-flex justify-content-end">
                    <li>
                        <Link to="/menu" ><img alt="menu" src={menu}></img></Link>
                    </li>
                    <li>
                        <Link to="Dashboard"><img alt="room" src={room}></img></Link>
                    </li>
                </div>
            </div>
        </nav>)
}

export default AtmosNavbar