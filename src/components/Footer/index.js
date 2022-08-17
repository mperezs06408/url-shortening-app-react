import React from 'react';
import { List } from '../List';
import { ListItem } from '../ListItem';
import Facebook from '../../assets/icon-facebook.svg';
import Twitter from '../../assets/icon-twitter.svg';
import Pinterest from '../../assets/icon-pinterest.svg';
import Instagram from '../../assets/icon-instagram.svg';

function Footer(props){
    return(
        <footer className='footer'>
            <section className='footer__section'>
                {props.logo}
            </section>
            <section className='footer__section'>
                <List>      
                    <ListItem>Features</ListItem>
                    <ListItem>Link Shortening</ListItem>
                    <ListItem>Branded Links</ListItem>
                    <ListItem>Analytics</ListItem>                    
                </List>
                <List>      
                    <ListItem>Resources</ListItem>
                    <ListItem>Blog</ListItem>
                    <ListItem>Developers</ListItem>
                    <ListItem>Support</ListItem>                    
                </List> 
                <List>      
                    <ListItem>Company</ListItem>
                    <ListItem>About</ListItem>
                    <ListItem>Our team</ListItem>
                    <ListItem>Careers</ListItem>
                    <ListItem>Contact</ListItem>                    
                </List>     
            </section>
            <section className='footer__section'>
                <List>
                    <ListItem>
                        <a>
                            <Facebook />
                        </a>
                    </ListItem>
                    <ListItem>
                        <a>
                            <Twitter />
                        </a>
                    </ListItem>
                    <ListItem>
                        <a>
                            <Pinterest />
                        </a>
                    </ListItem>
                    <ListItem>
                        <a>
                            <Instagram />
                        </a>
                    </ListItem>
                </List>
            </section>
        </footer>
    )
}

export {Footer};