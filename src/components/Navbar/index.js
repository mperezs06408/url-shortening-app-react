import React from 'react';

function Navbar(props) {
    return(
        <nav id="navbar">
            {props.children}
        </nav>)
}

export {Navbar};