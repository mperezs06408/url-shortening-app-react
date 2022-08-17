import React from 'react'
import {CardItem} from '../CardItem';
import BrandRecognition from '../../assets/icon-brand-recognition.svg';
import DetailedRecords from '../../assets/icon-detailed-records.svg';
import FullyCustomizable from '../../assets/icon-fully-customizable.svg';

function Main(props) {
    return(
        <main className='main'>
            {props.children}
            <section className='main__section'>
                <h2 className='main__section--title'>Advanced Statistics</h2>
                <p className='main__section--description'>Track how your links are performing 
                across the web with our advanced statistics dashboard.</p>
            </section>
            <article className='main__section main__section--article'>
                <CardItem>
                    <BrandRecognition />
                    <h3 className='article__title'>Brand Recognition</h3>
                    <p className='article__description'>Boost your brand recognition with each
                     click. Generic links don't mean a thing. Branded links help instil 
                    confidence in your content.</p>
                </CardItem>
                <CardItem>
                    <DetailedRecords />
                    <h3 className='article__title'>Detailed Records</h3>
                    <p className='article__description'>Gain insights into who is clicking your
                    links. Knowing when and where people engage with your content helps inform
                    better decisions.</p>
                </CardItem>
                <CardItem>
                    <FullyCustomizable />
                    <h3 className='article__title'>Fully Customizable</h3>
                    <p className='article__description'>Improve brand awareness and content
                    discoverability through customizable links, supercharging audience
                    engagement.</p>
                </CardItem>
            </article>
        </main>
    )
}

export {Main};