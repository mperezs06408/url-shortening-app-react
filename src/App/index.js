import React, {useState, useEffect} from 'react';
import {Navbar} from '../components/Navbar';
import MainLogo from '../assets/logo.svg';
import {List} from '../components/List';
import {ListItem} from '../components/ListItem';
import {Button} from '../components/Button';
import {Header} from '../components/Header';
import {Main} from '../components/Main';
import {UrlGenerator} from '../components/UrlGenerator';
import {CardItem} from '../components/CardItem';
import {Footer} from '../components/Footer';


const navElements = [
    {label: 'Features'},
    {label: 'Pricing'},
    {label: 'Resources'}
]


const urlElements = [
    {
        url: 'https://www.frontendmentor.io',
        short: 'https://rel.ink/ajdfk123a'
    },{
        url: 'https://twitter.com/frontendmentor',
        short: 'https://rel.ink./gaw123as'
    }
]

function App() {

    const [navbarItems, setNavbarItems] = useState([]);

    const [urlItems, setUrlItems] = useState([]);

    useEffect(() => {
        setNavbarItems(navElements);
        setUrlItems(urlElements)
    }, []);

    return(
        <>
            <Navbar>
                <MainLogo/>
                <List
                    styleClasses="navbar__list"
                >
                    {
                        navbarItems.map( (it, i) => (
                            <ListItem
                                key={i}
                                type="link"
                                styleClasses="navbar__item"
                            >{it.label}</ListItem>
                        ))
                    }
                </List>
                <List>
                    <ListItem
                        type="link"
                        styleClasses="navbar__item"
                    >Login</ListItem>
                    <ListItem
                        type="button"
                        styleClasses="navbar__item"
                    >
                        <Button 
                            type="link"
                            styleClasses="btn btn--link"
                        >
                            Sign Up
                        </Button>
                    </ListItem>
                </List>
            </Navbar>
            <Header>
                <Button></Button>
            </Header>
            <Main
                getStartedBtn={<Button></Button>}
            >
                <UrlGenerator>
                    <Button></Button>
                </UrlGenerator>
                <List>
                    {
                        urlItems.map((it, i) => (
                            <ListItem
                                key={i}
                            >
                                <CardItem>
                                    <p className='generator__text generator__text--url'>
                                        {it.url}
                                    </p>
                                    <p className='generator_text generator__text--short'>
                                        {it.short}
                                    </p>
                                    <Button></Button>
                                </CardItem>
                            </ListItem>
                        ))
                    }
                </List>
            </Main>
            <Footer
                logo={<MainLogo/>}
            />
        </>
    )
}

export default App;