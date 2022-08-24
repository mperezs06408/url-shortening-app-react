import React, {useState, useEffect} from 'react';
import { Button } from '../Button';
import { List } from '../List';
import { ListItem } from '../ListItem';
import './Navbar.css';

function Navbar({logo, screenWidth}) {
    const [showMenu, setShowMenu] = useState(false);
    
    const handleClick = () => {
        setShowMenu(prev => !prev)
    }

    useEffect(() => {
        if (screenWidth) {
            setShowMenu(false)
        }
    }, [screenWidth]);

    return(
        <nav id="navbar">
            {logo}
            {(showMenu || screenWidth) && 
                <div className='navbar__menu'>
                    <List
                        styleClasses="navbar__list navbar__list--links"
                    >
                        <ListItem
                            type="link"
                            styleClasses="navbar__item"
                            styleClassesLink="navbar__link--item"
                        >Features</ListItem>
                        <ListItem
                            type="link"
                            styleClasses="navbar__item"
                            styleClassesLink="navbar__link--item"
                        >Pricing</ListItem>
                        <ListItem
                            type="link"
                            styleClasses="navbar__item"
                            styleClassesLink="navbar__link--item"
                        >Resources</ListItem>
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
                </div>}
            <button 
                className='navbar__toggle'
                onClick={handleClick}
            >
                <span className='navbar__toggle--lines'></span>
            </button>
        </nav>)
}

export {Navbar};