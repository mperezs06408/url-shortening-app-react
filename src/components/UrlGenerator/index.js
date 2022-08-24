import React, {useState, useEffect, useContext} from 'react';
import { Context } from '../Context';

function UrlGenerator({children}) {
    const {
        screenWidth, 
        urlValue, 
        validUrl, 
        handleChange, 
        onSubmit
    } = useContext(Context);
    
    const [validationStyles, setValidationStyles] = useState({});
    const [styles, setStyles] = useState({});

    useEffect(() => {
        if(!validUrl) {
            setValidationStyles({
                borderWidth: '.2rem',
                borderStyle: 'solid',
                borderColor: 'var(--red)'
            })
        } else {
            setValidationStyles({})
        }
    }        
    ,[validUrl]);

    useEffect(() => {
        if (screenWidth) {
            setStyles({
                backgroundImage: 'url(./images/bg-shorten-desktop.svg)'
            })
        } else {
            setStyles({
                backgroundImage: 'url(./images/bg-shorten-mobile.svg)'
            })
        }
    }, [screenWidth])

    return(
        <form 
            id='form'
            style={styles}
            onSubmit={onSubmit}
        >
            <input 
                className='form__input' 
                type="text" 
                placeholder='Shorten a link here...'
                onChange={handleChange}
                value={urlValue}
                style={validationStyles}
            ></input>
            {!validUrl && <p className='form--alarm'>Please add a link</p>}
            
            {children}
        </form>
    )
}

export {UrlGenerator};