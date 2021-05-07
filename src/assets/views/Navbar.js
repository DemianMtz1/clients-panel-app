import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export const Navbar = () => {
    const [show, setShow] = useState(false)
    const showNavbar = (ev) => {
        setShow(!show);
        console.log(show)
    }
    return (
        <nav className="bg-red">
            
            <p>
                <NavLink to="/">
                    Clients<span>App</span>
                </NavLink>
            </p>
            <button className="hamb-menu"><FontAwesomeIcon icon={faBars} onClick={showNavbar}/></button>
            <ul className={!show ? 'd-none': 'd-visible animate__animated animate__fadeInLeft'}>
                <li>
                    <NavLink to="/" onClick={showNavbar}>
                        Inicio
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/add-clients" onClick={showNavbar}>
                        Añade tus clientes
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/view-clients" onClick={showNavbar}>
                        Ver tus clientes
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard-clients" onClick={showNavbar}>
                        Detalles generales
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}
