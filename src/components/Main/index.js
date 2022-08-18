import React from 'react'
import {CardItem} from '../CardItem';
import BrandRecognition from '../../assets/icon-brand-recognition.svg';
import DetailedRecords from '../../assets/icon-detailed-records.svg';
import FullyCustomizable from '../../assets/icon-fully-customizable.svg';
import './Main.css';

function Main(props) {
    return(
        <main id='main'>
            {props.children}
            <section className='main__section main__section--info'>
                <h2 className='main__section--title'>Advanced Statistics</h2>
                <p className='main__section--description'>Track how your links are performing 
                across the web with our advanced statistics dashboard.</p>
            </section>
            <article className='main__section main__section--article'>
                <CardItem>
                    <div className='article__img--container'>
                        <BrandRecognition />
                    </div>
                    <h3 className='article__title'>Brand Recognition</h3>
                    <p className='article__description'>Boost your brand recognition with each
                     click. Generic links don't mean a thing. Branded links help instil 
                    confidence in your content.</p>
                </CardItem>
                <CardItem>
                    <div className='article__img--container'>
                         <DetailedRecords />
                    </div>
                    <h3 className='article__title'>Detailed Records</h3>
                    <p className='article__description'>Gain insights into who is clicking your
                    links. Knowing when and where people engage with your content helps inform
                    better decisions.</p>
                </CardItem>
                <CardItem>
                    <div className='article__img--container'>
                        <FullyCustomizable />
                    </div>
                    <h3 className='article__title'>Fully Customizable</h3>
                    <p className='article__description'>Improve brand awareness and content
                    discoverability through customizable links, supercharging audience
                    engagement.</p>
                </CardItem>
            </article>
            <section 
                className='main__section main__section--boost'
                style={{
                    backgroundImage: 'url(./images/bg-boost-mobile.svg'
                }}
            >
                <h2>Boost your links today</h2>
                {props.getStartedBtn}
            </section>
        </main>
    )
}

export {Main};