import React from 'react'

function UrlGenerator(props) {
    return(
        <form className='form'>
            <input className='form__input' type="text"></input>
            {props.children}
            <p className='form--alarm'>Please add a link</p>
        </form>
    )
}

export {UrlGenerator};