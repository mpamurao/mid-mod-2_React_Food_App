import React from 'react';
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <div className="headerContainer">
            <div className="pageName">
                <Link to="/" style={{
                                    textDecoration:"none", color:"rgba(218, 6, 6, 0.911)"
                                    }}
                >
                    Dish It Out
                </Link>
            </div>
            <SearchBar />
            <NavBar />
        </div>
    );
}

export default Header;