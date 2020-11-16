import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import '../App.css'

const Header = (props) => {
    return(
        <Container className='jumbotron-container'>
            <Jumbotron fluid style={{"backgroundColor": "rgb(111, 224, 158)" }}>
                <Container fluid>
                    <h1 className='Title' style={{'fontFamily': "cursive", "fontSize": 40}}>Cricstats Engine</h1>
                </Container>
            </Jumbotron>
        </Container>
    )
}

export default Header;