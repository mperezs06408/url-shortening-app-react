import React from 'react';
import './Header.css';

function Header(props) {
    return(
        <header id='header'>
            <section className='header__section'>
                <img src='./images/illustration-working.svg' alt="Illustration working" />
            </section>
            <section className='header__section'>
                <h1 className='header__section--title'>More than just shorter links</h1>
                <p className='header__section--desc'>Build your brand's recognition and get detailed insights on how your links are performing.</p>
                {props.children}
            </section>
        </header>
    )
}

export {Header};