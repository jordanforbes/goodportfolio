import React from 'react';
import { useSpring, animated } from 'react-spring';

const CardInfo=props=>{

    const style = useSpring({opacity: 1, from: {opacity: 0}});

    return(
        <animated.div className="cardstyle-info" style={style}>
            <p className="cardstyle-title">{props.title}</p>
            <p className="cardstyle-subtitle">{props.subTitle}</p>
            <a className="" href={props.link} target="_blank" rel="noopener noreferrer">View</a>
        </animated.div>
    );
}

export default CardInfo