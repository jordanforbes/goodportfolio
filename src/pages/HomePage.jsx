import React from 'react';
import Hero from '../components/Hero';
import Carousel from '../components/Carousel';

const HomePage=(props)=>{

    return(
        <div>
            <Hero title={props.title} subTitle={props.subTitle} extraText={props.extraText} />
            <Carousel />
        </div>
    )

}

export default HomePage;