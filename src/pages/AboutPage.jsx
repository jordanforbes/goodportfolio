import React from 'react';

import Hero from '../components/Hero'
import Content from '../components/Content'

const AboutPage=(props)=>{

    return(
        <div>
            <Hero title={props.title} />

            <Content>
                <p>My name is Jordan Forbes, I am an artist and fullstack developer</p>
            </Content>
        </div>
    )

}

export default AboutPage;