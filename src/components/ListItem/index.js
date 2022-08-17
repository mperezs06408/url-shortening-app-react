import React from 'react';

function ListItem(props) {
    return (
        <li
            className={props.styleClasses}
        >
            {(props.type == "link") && 
                <a className='navbar__link--item'>{props.children}</a>
            }
            {(props.type != "link") &&
                props.children
            }
        </li>
    )
}

export {ListItem};