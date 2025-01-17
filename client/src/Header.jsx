import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/user">User</Link>
                    </li>
                    <li>
                        <Link to="/sales">Sales</Link>
                    </li>
                    <li>
                        <Link to="/category">Categories</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
