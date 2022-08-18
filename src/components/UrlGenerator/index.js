import React from 'react'

function UrlGenerator(props) {
    return(
        <form 
            id='form'
            style={{
                backgroundImage: 'url(./images/bg-shorten-mobile.svg'
            }}
        >
            <input className='form__input' type="text" placeholder='Shorten a link here...'></input>
            {!true && <p className='form--alarm'>Please add a link</p>}
            
            {props.children}
        </form>
    )
}

export {UrlGenerator};