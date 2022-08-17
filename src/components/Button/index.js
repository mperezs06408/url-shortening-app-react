import React from 'react';

function Button(props) {
    return(
        <button
            className={props.styleClasses}
        >
            {props.children}
        </button>
    )
}

export {Button};