import React from 'react';

function CardItem(props){
    return(
        <div className='card'>
            {props.children}
        </div>
    )
}

export {CardItem};