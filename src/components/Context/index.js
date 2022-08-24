import React, {useState, useEffect} from 'react';

const Context = React.createContext();

function ContextProvider(props){
    /** Global States */
    const [urlItems, setUrlItems] = useState([]);
    const [loadingUrl, setLoadingUrl] = useState(false);
    const [error, setError] = useState(false);
    const [screenWidth, setScreenWidth] = useState(false);
    /** Generator States */
    const [urlValue, setUrlValue] = useState('');
    const [validUrl, setValidUrl] = useState(true);

    /**Global Effects */
    useEffect(() => {
        handleWindowResolution();
        window.addEventListener('resize', handleWindowResolution)
    },[])

    /**Global Methods */
    const createUrlItem = (url, urlShorted) => {
        const itemList = [...urlItems];

        itemList.push({
            url: url.toLowerCase(),
            short: urlShorted.toLowerCase(),
            copied: false 
        });

        setUrlItems(itemList);
    }

    const updateElementCopied = (index) => {
        const itemList = [...urlItems];

        itemList[index].copied = true;

        setUrlItems(itemList);
    }

    const handleWindowResolution = () => {
        if (window.innerWidth > 768) {
            setScreenWidth(true);
        } else {
            setScreenWidth(false);
        }
    }

    /** Generator Methods */
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
            //throw new Error('test');
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
        <Context.Provider
            value={{
                urlItems,
                loadingUrl,
                setLoadingUrl,
                error,
                setError,
                screenWidth,
                createUrlItem,
                updateElementCopied,
                urlValue,
                validUrl,
                handleChange,
                onSubmit
            }}        
        >
            {props.children}
        </Context.Provider>
    )
}

export {Context, ContextProvider};