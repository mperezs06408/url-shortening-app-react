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
        url: 'https://twitter.com/frr',
        short: 'https://rel.ink./gaw123as'
    },{
        url: 'https://twitter.com/frr',
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
            <Navbar
                logo={<MainLogo/>}
            >
                <div className='navbar__menu'>
                    <List
                        styleClasses="navbar__list navbar__list--links"
                 >
                        {
                            navbarItems.map( (it, i) => (
                                <ListItem
                                    key={i}
                                    type="link"
                                    styleClasses="navbar__item"
                                    styleClassesLink="navbar__link--item"
                                >{it.label}</ListItem>
                            ))
                        }
                    </List>
                    <List
                        styleClasses="navbar__list navbar__list--login"
                    >
                        <ListItem
                            type="link"
                            styleClasses="navbar__item"
                            styleClassesLink="navbar__link--item"
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
                </div>
            </Navbar>
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
                <UrlGenerator>
                    <Button
                        styleClasses="btn btn--submit"
                    >Shortening</Button>
                </UrlGenerator>
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
                                    <p className='generator__text generator__text--short'>
                                        {it.short}
                                    </p>
                                    <Button
                                        styleClasses="btn btn--copied"
                                    >Copy</Button>
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