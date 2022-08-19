import React from 'react';
import './Loading.css';
import Spinner from '../../assets/spinner.svg';
import { CardItem } from '../CardItem';

function Loading() {
    return (
        <div
            className='loading'
        >   
            <CardItem>
                <Spinner />
                <p className='loading__text'>Loading</p>
            </CardItem>
        </div>
    )
}

export { Loading };