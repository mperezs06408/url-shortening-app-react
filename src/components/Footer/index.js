import React from 'react';
import { List } from '../List';
import { ListItem } from '../ListItem';
import Facebook from '../../assets/icon-facebook.svg';
import Twitter from '../../assets/icon-twitter.svg';
import Pinterest from '../../assets/icon-pinterest.svg';
import Instagram from '../../assets/icon-instagram.svg';
import './Footer.css';

function Footer(props){
    return(
        <footer id='footer'>
            <section className='footer__section footer__section--logo'>
                {props.logo}
            </section>
            <section className='footer__section footer__section--links'>
                <List styleClasses="link__section link__section--features">      
                    <ListItem styleClasses="link__title">Features</ListItem>
                    <ListItem styleClasses="link__url" styleClassesLink="link__url--url" type="link">Link Shortening</ListItem>
                    <ListItem styleClasses="link__url" styleClassesLink="link__url--url" type="link">Branded Links</ListItem>
                    <ListItem styleClasses="link__url" styleClassesLink="link__url--url" type="link">Analytics</ListItem>                    
                </List>
                <List styleClasses="link__section link__section--resources">      
                    <ListItem styleClasses="link__title">Resources</ListItem>
                    <ListItem styleClasses="link__url" styleClassesLink="link__url--url" type="link">Blog</ListItem>
                    <ListItem styleClasses="link__url" styleClassesLink="link__url--url" type="link">Developers</ListItem>
                    <ListItem styleClasses="link__url" styleClassesLink="link__url--url" type="link">Support</ListItem>                    
                </List> 
                <List styleClasses="link__section link__section--company">      
                    <ListItem styleClasses="link__title">Company</ListItem>
                    <ListItem styleClasses="link__url" styleClassesLink="link__url--url" type="link">About</ListItem>
                    <ListItem styleClasses="link__url" styleClassesLink="link__url--url" type="link">Our team</ListItem>
                    <ListItem styleClasses="link__url" styleClassesLink="link__url--url" type="link">Careers</ListItem>
                    <ListItem styleClasses="link__url" styleClassesLink="link__url--url" type="link">Contact</ListItem>                    
                </List>     
            </section>
            <section className='footer__section footer__section--social'>
                <List
                    styleClasses="social__list"
                >
                    <ListItem  
                        styleClasses="social__item"
                        styleClassesLink="social__item--link"
                    >
                        <Facebook />
                    </ListItem>
                    <ListItem  
                        styleClasses="social__item"
                        styleClassesLink="social__item--link"
                    >
                        <Twitter />
                    </ListItem>
                    <ListItem  
                        styleClasses="social__item"
                        styleClassesLink="social__item--link"
                    >
                        <Pinterest />
                    </ListItem>
                    <ListItem  
                        styleClasses="social__item"
                        styleClassesLink="social__item--link"
                    >
                        <Instagram />
                    </ListItem>
                </List>
            </section>
        </footer>
    )
}

export {Footer};