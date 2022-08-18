import React, {useState} from 'react';
import './Navbar.css';

function Navbar(props) {
    const [showMenu, setShowMenu] = useState(false);

    const handleClick = () => {
        setShowMenu(prev => !prev)
    }

    return(
        <nav id="navbar">
            {props.logo}
            {showMenu && props.children}
            <button 
                className='navbar__toggle'
                onClick={handleClick}
            >
                <span className='navbar__toggle--lines'></span>
            </button>
        </nav>)
}

export {Navbar};