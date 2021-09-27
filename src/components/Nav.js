import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <NavLink to="/">Home / </NavLink>


            <NavLink to="/allBooks"> All Books</NavLink>

            <NavLink to="/allBookOwnerships"> All BookOwnerships</NavLink>
        </div>
    )
}

export default Nav;