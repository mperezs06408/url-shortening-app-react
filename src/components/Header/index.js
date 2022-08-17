import React from 'react';
import IllustrationWorking from '../../assets/illustration-working.svg';

function Header(props) {
    return(
        <header className='header'>
            <section className='header__section'>
                <h1 className='header__section--title'>More than just shorter links</h1>
                <p className='header__section--desc'>Build your brand's recognition and get detailed insights on how your links are performing.</p>
                {props.children}
            </section>
            <section className='header__section'>
                <IllustrationWorking />
            </section>
        </header>
    )
}

export {Header};