import React from 'react';
import './Error.css';
import ErrorPage from '../../assets/error-page.svg';
import { CardItem } from '../CardItem';

function Error() {
    return (
        <div
            className='error'
        >   
            <CardItem>
                <ErrorPage />
                <p className='error__text'>Something has happend :(</p>
            </CardItem>
        </div>
    )
}

export { Error };