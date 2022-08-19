import React, {useState, useEffect} from 'react';
/**Components */
import {Navbar} from '../components/Navbar';
import {List} from '../components/List';
import {ListItem} from '../components/ListItem';
import {Button} from '../components/Button';
import {Header} from '../components/Header';
import {Main} from '../components/Main';
import {UrlGenerator} from '../components/UrlGenerator';
import {CardItem} from '../components/CardItem';
import {Footer} from '../components/Footer';
/**SVG Images */
import MainLogo from '../assets/logo.svg';
/**CSS Stylesheets */
import './App.css';
/**Skeleton componets */
import { Loading } from '../components/Loading';
import { Error } from '../components/Error';
/**Copy To Clipboard */
import { CopyToClipboard } from 'react-copy-to-clipboard';

function App() {
    const [urlItems, setUrlItems] = useState([]);
    const [loadingUrl, setLoadingUrl] = useState(false);
    const [error, setError] = useState(false);

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


    return(
        <>
            <Navbar
                logo={<MainLogo/>}
            />
            <Header>
                <Button
                    styleClasses="btn btn--link"
                >Get Started</Button>
            </Header>
            <Main
                getStartedBtn={
                <Button
                    styleClasses="btn btn--link"
                >Get Started
                </Button>
            }
            >
                <UrlGenerator
                    createUrlItem={createUrlItem}
                    loadingUrl={loadingUrl}
                    setLoadingUrl={setLoadingUrl}
                    setError={setError}
                >
                    <Button
                        styleClasses="btn btn--submit"
                    >Shortening</Button>
                </UrlGenerator>

                {(loadingUrl && !error) && 
                    <Loading />
                }
                {error &&
                    <Error />    
                }
                {!loadingUrl &&
                    <List
                        styleClasses="generator__list"
                    >
                        {
                            urlItems.map((it, i) => (
                                <ListItem
                                    key={i}
                                    styleClasses="generator__item"
                                >
                                    <CardItem>
                                        <p className='generator__text generator__text--url'>
                                            {it.url}
                                        </p>
                                        <a 
                                            className='generator__text generator__text--short'
                                            href={`https://${it.short}`}
                                            target="__blank"
                                        >
                                            {it.short}
                                        </a>
                                        <CopyToClipboard
                                            text={it.short}
                                        >
                                            <Button
                                                styleClasses={it.copied ? "btn btn--copied": "btn btn--copy"}
                                                onClick={() => {updateElementCopied(i)}}
                                            >{it.copied ? 'Copied!' : 'Copy'}</Button>
                                        </CopyToClipboard>
                                    </CardItem>
                                </ListItem>
                            ))
                        }
                    </List>
                }
            </Main>
            <Footer
                logo={<MainLogo/>}
            />
        </>
    )
}

export default App;