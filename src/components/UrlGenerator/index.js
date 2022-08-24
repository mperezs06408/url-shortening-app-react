import React, {useState, useEffect} from 'react'

function UrlGenerator({createUrlItem, setLoadingUrl, setError, screenWidth, children}) {
    const [urlValue, setUrlValue] = useState('');
    const [validUrl, setValidUrl] = useState(true);
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

    const handleChange = (e) => {
        const value = e.target.value;

        if (value){
            setValidUrl(true);
        } else {
            setValidUrl(false)
        }

        setUrlValue(value);
    } 

    const getShortedUrl = async () => {
        console.time('request');
        setLoadingUrl(true);
        try {
            const request = await fetch(`https://api.shrtco.de/v2/shorten?url=${urlValue}`);
            const jsonResponse = await request.json();

            if (jsonResponse.ok){
                const result = jsonResponse.result;

                createUrlItem(result.original_link, result.short_link);
            } else {
                setValidUrl(false);
            }
            // throw new Error('test');
            setLoadingUrl(false);
            console.timeEnd('request');
        } catch (e) {
            console.log('Something has happened: '+e);
            setError(true);
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        
        if (validUrl && !!urlValue){
            getShortedUrl();
        } else {
            setValidUrl(false);
        }
    }



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