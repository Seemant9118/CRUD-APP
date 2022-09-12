import React from 'react'
import {Link , NavLink ,Outlet} from 'react-router-dom'

function Navbar() {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className='container'>
                <NavLink className='navbar-brand' to='/'>
                    React User
                </NavLink>
                <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact  to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/contact">Contact</NavLink>
                        </li>
                        
                    </ul>
                </div>
                <Link className='btn btn-outline-light' to='/users/add'>Add User</Link>
            </div>    

        </nav>
        <Outlet/>
        </>
    )
}

export default Navbar