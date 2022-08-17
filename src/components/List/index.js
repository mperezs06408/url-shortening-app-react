import React from 'react';

function List(props) {
    return(
        <ul
            className={props.styleClasses}
        >
            {props.children}
        </ul>
    )
}

export {List};