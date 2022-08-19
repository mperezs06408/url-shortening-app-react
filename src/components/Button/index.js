import React from 'react';

function Button(props) {
    return(
        <button
            className={props.styleClasses}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    )
}

export {Button};