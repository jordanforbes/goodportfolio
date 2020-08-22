import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Card from './Card';
import keyparty from '../assets/images/keyparty.png';
import acrosstik from '../assets/images/acrosstik.png';
import shonenflop from '../assets/images/shonenflopvectordrawing.png';

class Carousel extends React.Component{
    constructor(props){
        super(props);
        this.state={
            items:[
                {
                    id:0,
                    title: 'Key-Party',
                    subTitle: 'Musical key and scale finder',
                    imgSrc: keyparty,
                    link: 'https://keyparty.herokuapp.com',
                    selected: false
                },
                {
                    id:1,
                    title: 'Acrosstik',
                    subTitle: 'Acrosstic poem generator',
                    imgSrc: acrosstik,
                    link: 'https://acrosstik.herokuapp.com',
                    selected: false
                },
                {
                    id:2,
                    title: 'Shonen Flop',
                    subTitle: 'A podcast about cancelled manga',
                    imgSrc: shonenflop,
                    link: 'https://shonenflop.libsyn.com',
                    selected: false
                }
            ]

        }
    }

    handleCardClick =(id, card)=>{
        console.log(id);
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        })

        this.setState({
            items
        });
    }

    makeItems=(items)=>{
        return items.map(item => {
            return <Card item ={item} click={(e => this.handleCardClick(item.id, e))} />
        })
    }

    render(){
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        )

    }
}

export default Carousel;