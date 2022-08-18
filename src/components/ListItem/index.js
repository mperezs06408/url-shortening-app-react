import React from 'react';

function ListItem(props) {
    return (
        <li
            className={props.styleClasses}
        >
            {(props.type == "link") && 
                <a className={props.styleClassesLink}>{props.children}</a>
            }
            {(props.type != "link") &&
                props.children
            }
        </li>
    )
}

export {ListItem};